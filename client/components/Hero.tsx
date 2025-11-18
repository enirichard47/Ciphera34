import React, { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onSearch: (address: string) => void;
  isLoading?: boolean;
}

export default function Hero({ onSearch, isLoading = false }: HeroProps) {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) onSearch(address.trim());
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f111a] via-[#1a1c2c] to-[#0f111a] pointer-events-none" />

      {/* Particle-like floating neon orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ff3c9e]/20 rounded-full mix-blend-color-dodge filter blur-3xl animate-neon-orb" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00ffe7]/20 rounded-full mix-blend-color-dodge filter blur-3xl animate-neon-orb animation-delay-3000" />
      <div className="absolute bottom-0 left-32 w-96 h-96 bg-[#ffb500]/20 rounded-full mix-blend-color-dodge filter blur-3xl animate-neon-orb animation-delay-5000" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent animate-gradient-x">
            Scan Tokens.
          </span>
          <br />
          <span className="text-white">Know the Risk Instantly.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Analyze token pairs on major chains with live liquidity, volume, market cap, and AI-powered risk scores — all in real-time.
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          id="scan-form"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter token address (ETH, BSC, Polygon...)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={isLoading}
              className={cn(
                "w-full pl-12 pr-4 py-3 bg-black/40 border border-[#ff3c9e]/40 rounded-2xl text-white placeholder-slate-400 backdrop-blur-md",
                "focus:outline-none focus:border-[#00ffe7] focus:ring-2 focus:ring-[#00ffe7]/40 transition-all duration-300",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "px-8 py-3 bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] text-black font-bold rounded-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                Scan <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { label: "Chains Supported", value: "25+", color: "#00ffe7" },
            { label: "Live Data", value: "Real-Time", color: "#ff3c9e" },
            { label: "AI Risk Analysis", value: "Powered", color: "#ffb500" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-black/40 border border-white/20 rounded-3xl backdrop-blur-md hover:scale-105 hover:shadow-[0_0_30px] transition-all duration-300"
            >
              <div
                className="text-3xl font-extrabold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <p className="text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Neon blob animation */
          @keyframes neon-orb {
            0%, 100% { transform: translate(0,0) scale(1); }
            25% { transform: translate(30px, -40px) scale(1.1); }
            50% { transform: translate(-25px, 25px) scale(0.9); }
            75% { transform: translate(50px, 50px) scale(1.05); }
          }
          .animate-neon-orb { animation: neon-orb 12s infinite; }
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-5000 { animation-delay: 5s; }

          /* Gradient text animation */
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
