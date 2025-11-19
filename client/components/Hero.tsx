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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-12">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050816] to-black pointer-events-none" />

      {/* Subtle radial spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_top,_rgba(0,255,231,0.22),_transparent_60%)] opacity-90" />
        <div className="absolute bottom-[-20%] left-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,60,158,0.18),_transparent_60%)]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,181,0,0.18),_transparent_60%)]" />
      </div>

      {/* Animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="hero-grid-mask absolute inset-0" />
      </div>

      {/* Floating orbs + streaks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#ff3c9e]/35 rounded-full mix-blend-screen blur-3xl animate-neon-orb-slow" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 bg-[#00ffe7]/40 rounded-full mix-blend-screen blur-3xl animate-neon-orb" />
        <div className="absolute bottom-[-10%] left-24 w-96 h-96 bg-[#ffb500]/30 rounded-full mix-blend-screen blur-[80px] animate-neon-orb-late" />

        {/* Light streaks */}
        <div className="absolute top-10 left-[-10%] w-[40%] h-px bg-gradient-to-r from-transparent via-[#00ffe7]/70 to-transparent opacity-70 animate-streak" />
        <div className="absolute bottom-16 right-[-15%] w-[45%] h-px bg-gradient-to-l from-transparent via-[#ff3c9e]/60 to-transparent opacity-70 animate-streak-late" />
      </div>

      {/* Glowing concentric rings behind content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full border border-white/5 blur-[1px] animate-ring-pulse" />
        <div className="absolute w-[620px] h-[620px] rounded-full border border-white/5 blur-[2px] opacity-60 animate-ring-pulse-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl text-xs sm:text-sm text-slate-200 shadow-[0_0_30px_rgba(0,0,0,0.7)] animate-fade-down">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping-once" />
          <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent font-semibold">
            Real-time on-chain intel
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300/80">Multi-chain token scanner</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight animate-hero-title">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent animate-gradient-x">
              Scan Tokens.
            </span>
            {/* Underline glow */}
            <span className="absolute left-1/2 bottom-[-8px] h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00ffe7] to-transparent blur-[1px] opacity-80 animate-underline" />
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]">
            Know the Risk Instantly.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-150">
          Analyze token pairs across major chains with live liquidity, volume,
          market cap, and AI-powered risk scores — all streaming in real-time
          so you never miss a move.
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          id="scan-form"
          className="relative flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-fade-up delay-300"
        >
          {/* Glow behind form */}
          <div className="pointer-events-none absolute inset-x-0 -inset-y-4 max-w-3xl mx-auto rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(0,255,231,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,60,158,0.2),_transparent_60%)] opacity-80 blur-xl" />

          <div className="relative flex-1 max-w-2xl mx-auto">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00ffe7]/40 via-[#ff3c9e]/35 to-[#ffb500]/40 opacity-70 blur-[20px]" />
            <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_14px_45px_rgba(15,23,42,0.8)] hero-input-shell">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Paste a token contract address (ETH, BSC, Polygon...)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={isLoading}
                className={cn(
                  "w-full pl-12 pr-4 py-3.5 bg-transparent rounded-2xl text-sm sm:text-base text-white placeholder-slate-500",
                  "focus:outline-none"
                )}
              />
              {/* Animated border shimmer */}
              <span className="pointer-events-none absolute inset-px rounded-[14px] border border-transparent hero-border-shimmer" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "relative px-8 py-3.5 mt-1 sm:mt-0 text-sm sm:text-base font-semibold rounded-2xl",
              "bg-[linear-gradient(120deg,#00ffe7,#ff3c9e,#ffb500,#00ffe7)] bg-[length:220%_220%] text-black shadow-[0_10px_35px_rgba(0,0,0,0.9)]",
              "hover:scale-[1.05] hover:-translate-y-[1px] active:scale-[0.98]",
              "transition-all duration-300 flex items-center justify-center gap-2",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "animate-gradient-button"
            )}
          >
            {isLoading ? (
              <>
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-transparent animate-spin" />
                <div className="absolute w-6 h-6 rounded-full border border-black/10 animate-ping-slow" />
              </div>
              <span className="tracking-wide">Scanning...</span>
            </>
          ) : (
            <>
              <span className="tracking-wide">Scan Now</span>
              <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </>
          )}

          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-8 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-center gap-2 animate-fade-up delay-500">
          <span className="flex items-center gap-2">
            <span className="inline-flex h-[6px] w-[6px] rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Live on-chain feeds
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1">
            <span className="text-slate-400">Secured with</span>
            <span className="text-slate-200 font-medium">AI anomaly detection</span>
          </span>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
          {[
            {
              label: "Chains Supported",
              value: "25+",
              color: "#00ffe7",
              description: "EVM & emerging networks monitored"
            },
            {
              label: "Live Data Window",
              value: "Real-Time",
              color: "#ff3c9e",
              description: "Liquidity, volume & holders updating live"
            },
            {
              label: "AI Risk Engine",
              value: "Powered",
              color: "#ffb500",
              description: "Rug-pull, honeypot & volatility scoring"
            }
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={cn(
                "relative group p-[1px] rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(15,23,42,0.9))]",
                "animate-fade-up",
                idx === 0 ? "delay-400" : idx === 1 ? "delay-500" : "delay-600"
              )}
            >
              <div className="relative h-full rounded-3xl bg-black/70 border border-white/10 backdrop-blur-2xl px-5 py-6 flex flex-col items-start sm:items-center gap-2 sm:gap-3 shadow-[0_18px_40px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Glow orb inside card */}
                <div
                  className="pointer-events-none absolute -top-10 left-0 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{ backgroundColor: stat.color }}
                />

                <div
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-slate-400/90 max-w-xs">
                  {stat.description}
                </p>

                {/* Bottom animated accent line */}
                <div className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70 group-hover:w-28 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex justify-center animate-fade-up delay-700">
          <div className="flex flex-col items-center gap-2 text-xs text-slate-500/80">
            <div className="relative h-8 w-[1px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-500/70 to-transparent opacity-70" />
              <div className="absolute top-0 left-1/2 -ml-[1px] h-8 w-[2px] bg-gradient-to-b from-[#00ffe7] to-transparent animate-scroll-line" />
            </div>
            <span>Scroll to explore token insights</span>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Background grid */
          .hero-grid-mask {
            background-image:
              linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
            animation: hero-grid-move 24s linear infinite;
          }

          @keyframes hero-grid-move {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 60px 60px, 60px 60px; }
          }

          /* Neon orbs */
          @keyframes neon-orb {
            0%, 100% { transform: translate(0,0) scale(1); }
            25% { transform: translate(30px, -40px) scale(1.09); }
            50% { transform: translate(-25px, 25px) scale(0.97); }
            75% { transform: translate(50px, 55px) scale(1.04); }
          }
          .animate-neon-orb { animation: neon-orb 16s ease-in-out infinite alternate; }
          .animate-neon-orb-slow { animation: neon-orb 22s ease-in-out infinite alternate; }
          .animate-neon-orb-late { animation: neon-orb 18s ease-in-out 4s infinite alternate; }

          /* Streaks */
          @keyframes streak-move {
            0% { transform: translateX(-10%); opacity: 0; }
            15% { opacity: 1; }
            60% { transform: translateX(110%); opacity: 1; }
            100% { transform: translateX(130%); opacity: 0; }
          }
          .animate-streak { animation: streak-move 10s ease-in-out infinite; }
          .animate-streak-late { animation: streak-move 12s ease-in-out 3s infinite; }

          /* Rings */
          @keyframes ring-pulse {
            0%, 100% { transform: scale(1); opacity: 0.65; }
            50% { transform: scale(1.05); opacity: 0.35; }
          }
          .animate-ring-pulse { animation: ring-pulse 14s ease-in-out infinite; }
          .animate-ring-pulse-slow { animation: ring-pulse 18s ease-in-out infinite; }

          /* Hero entrance */
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(22px) scale(0.99); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fade-down {
            0% { opacity: 0; transform: translateY(-16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            opacity: 0;
            animation: fade-up 0.7s ease-out forwards;
          }
          .animate-fade-down {
            opacity: 0;
            animation: fade-down 0.7s ease-out forwards;
          }
          .delay-150 { animation-delay: 0.15s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }

          @keyframes hero-title {
            0% { opacity: 0; transform: translateY(32px); letter-spacing: 0.1em; }
            60% { letter-spacing: 0.02em; }
            100% { opacity: 1; transform: translateY(0); letter-spacing: 0em; }
          }
          .animate-hero-title {
            animation: hero-title 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }

          /* Gradient text animation */
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 7s ease-in-out infinite;
          }

          /* Underline */
          @keyframes underline-glow {
            0%, 100% { transform: translateX(-50%) scaleX(0.4); opacity: 0.2; }
            50% { transform: translateX(-50%) scaleX(1); opacity: 0.85; }
          }
          .animate-underline {
            animation: underline-glow 2.8s ease-in-out infinite;
          }

          /* Button gradient */
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-button {
            animation: gradient-move 5s ease-in-out infinite;
          }

          /* Input border shimmer */
          @keyframes border-shimmer {
            0% { border-image-source: linear-gradient(120deg, rgba(148,163,184,0.3), rgba(15,23,42,0.1), rgba(148,163,184,0.3)); opacity: 0.1; }
            40% { opacity: 0.6; }
            50% { border-image-source: linear-gradient(120deg, rgba(0,255,231,0.85), rgba(255,60,158,0.9), rgba(255,181,0,0.9)); opacity: 1; }
            100% { border-image-source: linear-gradient(120deg, rgba(148,163,184,0.3), rgba(15,23,42,0.1), rgba(148,163,184,0.3)); opacity: 0.1; }
          }
          .hero-border-shimmer {
            border-radius: inherit;
            border: 1px solid transparent;
            border-image-slice: 1;
            animation: border-shimmer 5.5s ease-in-out infinite;
          }

          /* Input shell subtle hover */
          .hero-input-shell {
            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, background 0.3s ease;
          }
          .hero-input-shell:hover {
            transform: translateY(-1px);
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.9);
            background: rgba(15, 23, 42, 0.95);
          }

          /* Ping effects */
          @keyframes ping-once {
            0% { transform: scale(0.8); opacity: 0.4; }
            40% { transform: scale(1.3); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
          }
          .animate-ping-once {
            animation: ping-once 1.8s cubic-bezier(0, 0, 0.2, 1) 0.3s 1 forwards;
          }
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 0.4; }
            70% { transform: scale(1.6); opacity: 0; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .animate-ping-slow {
            animation: ping-slow 1.6s ease-out infinite;
          }

          /* Scroll line */
          @keyframes scroll-line {
            0% { transform: translateY(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { transform: translateY(100%); opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-scroll-line {
            animation: scroll-line 2.4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}