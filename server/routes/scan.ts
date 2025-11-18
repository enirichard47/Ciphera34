import { RequestHandler } from "express";
import {
  searchTokenAcrossChains,
  calculateRiskAnalysis,
} from "../services/dexScreenerAdapter.ts";
import { ScanResponse } from "../../shared/types.ts";

export const handleScan: RequestHandler = async (req, res) => {
  const { address } = req.params;

  if (!address || typeof address !== "string") {
    return res.status(400).json({
      success: false,
      error: "Address parameter is required",
    } as ScanResponse);
  }

  try {
    const pair = await searchTokenAcrossChains(address);

    if (!pair) {
      return res.status(404).json({
        success: false,
        error: "Token not found on any chain",
      } as ScanResponse);
    }

    const risk = calculateRiskAnalysis(pair);
    const price = parseFloat(pair.priceUsd);

    const result: ScanResponse = {
      success: true,
      data: {
        symbol: pair.baseToken.symbol,
        name: pair.baseToken.name,
        address: pair.baseToken.address,
        priceUsd: isNaN(price) ? 0 : price,
        liquidity: pair.liquidity.usd || 0,
        volume24h: pair.volume.h24 || 0,
        marketCap: pair.marketCap,
        priceChange5m: pair.priceChange.m5,
        priceChange1h: pair.priceChange.h1,
        priceChange24h: pair.priceChange.h24,
        transactions: pair.txns,
        chain: pair.chainId.toUpperCase(),
        dexUrl: pair.url,
        risk,
      },
    };

    res.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({
      success: false,
      error: message,
    } as ScanResponse);
  }
};
