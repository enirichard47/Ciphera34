export interface TokenPair {
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

export interface RiskAnalysis {
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High";
  verdict: string;
}

export interface ScanResult {
  symbol: string;
  name: string;
  address: string;
  priceUsd: number;
  liquidity: number;
  volume24h: number;
  marketCap: number | null;
  priceChange5m: number | null;
  priceChange1h: number | null;
  priceChange24h: number | null;
  transactions: {
    m5: { buys: number; sells: number } | null;
    h1: { buys: number; sells: number } | null;
    h24: { buys: number; sells: number } | null;
  };
  chain: string;
  dexUrl: string;
  risk: RiskAnalysis;
}

export interface ScanResponse {
  success: boolean;
  data?: ScanResult;
  error?: string;
}
