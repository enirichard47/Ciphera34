import { fetchWithRetry, safeJsonParse } from "../utils/httpClient.ts";
import { TokenPair } from "../../shared/types.ts";
import axios from "axios";
import { providerLimiter } from "../utils/rateLimiter";

export async function fetchDexscreenerData(address: string) {
  return providerLimiter.schedule(async () => {
    const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`;
    const res = await axios.get(url);
    return res.data;
  });
}

const CHAINS = [
  "ethereum",
  "bsc",
  "polygon",
  "avalanche",
  "fantom",
  "solana",
  "arbitrum",
  "optimism",
  "base",
  "zksync",
  "linea",
  "celo",
  "gnosis",
  "aurora",
  "moonbeam",
  "harmony",
  "metis",
  "opbnb",
  "kava",
  "fuse",
  "scroll",
  "mantle",
  "manta",
  "tron",
  "sui",
  "aptos",
];

interface DexScreenerPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceUsd: string;
  liquidity: {
    usd: number | null;
    base: number | null;
    quote: number | null;
  };
  volume: {
    h24: number | null;
    h6: number | null;
    h1: number | null;
    m5: number | null;
  };
  priceChange: {
    m5: number | null;
    h1: number | null;
    h24: number | null;
  };
  txns: {
    m5: { buys: number; sells: number } | null;
    h1: { buys: number; sells: number } | null;
    h24: { buys: number; sells: number } | null;
  };
  marketCap: number | null;
}

export async function searchTokenAcrossChains(
  address: string
): Promise<TokenPair | null> {
  const normalized = normalizeAddress(address);
  let bestPair: TokenPair | null = null;
  let maxLiquidity = 0;

  for (const chain of CHAINS) {
    const pair = await fetchTokenFromDexScreener(chain, normalized);
    if (
      pair &&
      pair.liquidity.usd &&
      pair.liquidity.usd > maxLiquidity
    ) {
      bestPair = pair;
      maxLiquidity = pair.liquidity.usd;
    }
  }

  return bestPair;
}

async function fetchTokenFromDexScreener(
  chain: string,
  address: string
): Promise<TokenPair | null> {
  const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`;

  try {
    const response = await fetchWithRetry(url);
    const data = await safeJsonParse<{
      pairs: DexScreenerPair[] | null;
    }>(response);

    if (!data.pairs || data.pairs.length === 0) {
      return null;
    }

    const chainPairs = data.pairs.filter(
      (p) => p.chainId.toLowerCase() === chain.toLowerCase()
    );

    if (chainPairs.length === 0) {
      return null;
    }

    const pair = chainPairs.reduce((best, current) => {
      const currentLiquidity = current.liquidity?.usd || 0;
      const bestLiquidity = best.liquidity?.usd || 0;
      return currentLiquidity > bestLiquidity ? current : best;
    });

    return pair;
  } catch (error) {
    return null;
  }
}

function normalizeAddress(address: string): string {
  return address.trim().toLowerCase();
}

export function calculateRiskAnalysis(pair: TokenPair) {
  let riskScore = 0;
  let riskReasons: string[] = [];

  const liquidity = pair.liquidity.usd || 0;
  const volume24h = pair.volume.h24 || 0;
  const marketCap = pair.marketCap || 0;
  const priceChange24h = pair.priceChange.h24 || 0;

  if (liquidity < 10000) {
    riskScore += 40;
    riskReasons.push("Very low liquidity");
  } else if (liquidity < 50000) {
    riskScore += 25;
    riskReasons.push("Low liquidity");
  } else if (liquidity < 250000) {
    riskScore += 10;
    riskReasons.push("Moderate liquidity");
  }

  if (volume24h < 1000) {
    riskScore += 30;
    riskReasons.push("Very low trading volume");
  } else if (volume24h < 10000) {
    riskScore += 15;
    riskReasons.push("Low trading volume");
  }

  if (marketCap === null || marketCap === 0) {
    riskScore += 20;
    riskReasons.push("Unable to determine market cap");
  }

  if (priceChange24h < -20) {
    riskScore += 15;
    riskReasons.push("Significant price decline (>20%)");
  }

  if (priceChange24h > 100) {
    riskScore += 20;
    riskReasons.push("Extreme price increase (>100%)");
  }

  let riskLevel: "Low" | "Medium" | "High";
  if (riskScore < 30) {
    riskLevel = "Low";
  } else if (riskScore < 60) {
    riskLevel = "Medium";
  } else {
    riskLevel = "High";
  }

  let verdict = "";
  if (riskLevel === "Low") {
    verdict = `This token appears relatively safe with stable metrics. Liquidity is adequate at $${formatNumber(liquidity)}, and trading activity is healthy. Monitor for any sudden changes.`;
  } else if (riskLevel === "Medium") {
    verdict = `This token carries moderate risk. ${riskReasons.join(", ")}. Exercise caution and conduct further research before investing.`;
  } else {
    verdict = `This token carries HIGH RISK. ${riskReasons.join(", ")}. This is not suitable for risk-averse investors.`;
  }

  return {
    riskScore: Math.min(100, riskScore),
    riskLevel,
    verdict,
  };
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toFixed(2);
}
