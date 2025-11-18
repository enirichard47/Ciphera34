import React, { useState } from "react";
import { ScanResult } from "@shared/types";
import {
  Copy,
  Check,
  TrendingUp,
  TrendingDown,
  BarChart3,
  DollarSign,
  Droplets,
  Zap,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ScanResultsProps {
  result: ScanResult;
  onRescan: () => void;
}

export default function ScanResults({
  result,
  onRescan,
}: ScanResultsProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.dexUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRiskIcon = () => {
    switch (result.risk.riskLevel) {
      case "Low":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "Medium":
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case "High":
        return <AlertCircle className="w-6 h-6 text-red-400" />;
    }
  };

  const getRiskColor = () => {
    switch (result.risk.riskLevel) {
      case "Low":
        return "from-green-500/10 to-green-500/5 border-green-500/20";
      case "Medium":
        return "from-yellow-500/10 to-yellow-500/5 border-yellow-500/20";
      case "High":
        return "from-red-500/10 to-red-500/5 border-red-500/20";
    }
  };

  const getRiskBgColor = () => {
    switch (result.risk.riskLevel) {
      case "Low":
        return "bg-green-500/10";
      case "Medium":
        return "bg-yellow-500/10";
      case "High":
        return "bg-red-500/10";
    }
  };

  const getRiskTextColor = () => {
    switch (result.risk.riskLevel) {
      case "Low":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "High":
        return "text-red-400";
    }
  };

  const formatPrice = (price: number) => {
    if (price < 0.001) return `$${price.toExponential(2)}`;
    if (price < 1) return `$${price.toFixed(6)}`;
    return `$${price.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  };

  const formatLarge = (num: number | null) => {
    if (num === null || num === 0) return "N/A";
    if (num >= 1000000000) return `$${(num / 1000000000).toFixed(2)}B`;
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const PriceChangeDisplay = ({
    value,
    label,
  }: {
    value: number | null;
    label: string;
  }) => {
    if (value === null) return <span className="text-slate-400">N/A</span>;
    const isPositive = value >= 0;
    return (
      <div>
        <div className="text-sm text-slate-400 mb-1">{label}</div>
        <div
          className={cn(
            "flex items-center gap-1 text-lg font-semibold",
            isPositive ? "text-green-400" : "text-red-400"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {isPositive ? "+" : ""}
          {value.toFixed(2)}%
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main token info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Token Header Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {result.symbol}
                </h1>
                <p className="text-slate-400">{result.name}</p>
                <p className="text-xs text-slate-500 mt-2 break-all">
                  {result.address}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {formatPrice(result.priceUsd)}
                </div>
                <div className="text-sm text-slate-400 mt-1">{result.chain}</div>
              </div>
            </div>

            {/* Price changes grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <PriceChangeDisplay value={result.priceChange5m} label="5m" />
              <PriceChangeDisplay value={result.priceChange1h} label="1h" />
              <PriceChangeDisplay value={result.priceChange24h} label="24h" />
              <div>
                <div className="text-sm text-slate-400 mb-1">Chain</div>
                <div className="text-lg font-semibold text-purple-400">
                  {result.chain}
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard
              icon={Droplets}
              label="Liquidity"
              value={formatLarge(result.liquidity)}
              color="cyan"
            />
            <MetricCard
              icon={BarChart3}
              label="24h Volume"
              value={formatLarge(result.volume24h)}
              color="purple"
            />
            <MetricCard
              icon={DollarSign}
              label="Market Cap"
              value={formatLarge(result.marketCap)}
              color="pink"
            />
            <MetricCard
              icon={Zap}
              label="24h Transactions"
              value={
                result.transactions.h24
                  ? `${result.transactions.h24.buys + result.transactions.h24.sells}`
                  : "N/A"
              }
              color="orange"
            />
          </div>

          {/* Transactions breakdown */}
          {result.transactions.h24 && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                24h Transactions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Buys</div>
                  <div className="text-2xl font-bold text-green-400">
                    {result.transactions.h24.buys}
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Sells</div>
                  <div className="text-2xl font-bold text-red-400">
                    {result.transactions.h24.sells}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEX Link */}
          <a
            href={result.dexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            View on DEX
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Risk Analysis Sidebar */}
        <div className="space-y-6">
          {/* Risk Card */}
          <div
            className={cn(
              "bg-gradient-to-br rounded-2xl p-6 border",
              getRiskColor()
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              {getRiskIcon()}
              <h3 className="text-lg font-semibold text-white">Risk Analysis</h3>
            </div>

            <div className={cn("rounded-lg p-4 mb-4", getRiskBgColor())}>
              <div className="text-sm text-slate-300 mb-1">Risk Level</div>
              <div
                className={cn("text-2xl font-bold", getRiskTextColor())}
              >
                {result.risk.riskLevel}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-slate-300 mb-2">Risk Score</div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className={cn(
                    "h-full transition-all duration-300",
                    result.risk.riskScore < 30
                      ? "bg-green-400"
                      : result.risk.riskScore < 60
                        ? "bg-yellow-400"
                        : "bg-red-400"
                  )}
                  style={{ width: `${result.risk.riskScore}%` }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {result.risk.riskScore}/100
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {result.risk.verdict}
            </p>
          </div>

          {/* Copy URL Button */}
          <button
            onClick={copyToClipboard}
            className="w-full bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy DEX URL
              </>
            )}
          </button>

          {/* Rescan Button */}
          <button
            onClick={onRescan}
            className="w-full bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Rescan
          </button>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: "cyan" | "purple" | "pink" | "orange";
}

function MetricCard({ icon: Icon, label, value, color }: MetricCardProps) {
  const colorClasses = {
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  };

  return (
    <div className={cn("border rounded-xl p-4", colorClasses[color])}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5" />
        <span className="text-sm text-slate-300">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold break-words">{value}</div>
    </div>
  );
}
