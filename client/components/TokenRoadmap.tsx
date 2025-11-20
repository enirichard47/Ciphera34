import React from "react";
import { cn } from "@/lib/utils";

const roadmapPhases = [
  {
    title: "Phase 1: Marketing & Community Expansion",
    timeframe: "Q4 2025",
    details: [
      "Run influencer campaigns, AMAs, and NFT collaborations.",
      "Expand presence on X, YouTube, and blockchain communities.",
      "Launch community reward systems and referral programs.",
    ],
    color: "#00FFE7",
  },
  {
    title: "Phase 2: Utility Expansion & Ecosystem Integration",
    timeframe: "Q1 2026",
    details: [
      "Integrate token into Noventra scanner utilities and dashboard.",
      "Begin multi-chain expansion and DApp integrations.",
      "Activate DAO governance capabilities for token holders.",
    ],
    color: "#FF3C9E",
  },
  {
    title: "Phase 3: Global Adoption & Scaling",
    timeframe: "Q2 2026",
    details: [
      "List on major centralized exchanges (CEXs).",
      "Launch global marketing campaigns targeting traders & Web3 users.",
      "Strengthen multi-chain and institutional partnerships.",
    ],
    color: "#FFB500",
  },
  {
    title: "Phase 4: Long-Term Growth & Sustainability",
    timeframe: "2026+",
    details: [
      "Continuous upgrades on the Noventra AI scanning and analytics engine.",
      "Ongoing roadmap expansions voted by the community DAO.",
      "Support for cross-chain integrations and enterprise adoption.",
    ],
    color: "#00FFE7",
  },
];

export default function TokenRoadmap() {
  return (
    <section className="relative  min-h-[70vh] py-20 px-6 sm:px-12 lg:px-24 bg-black/90 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_top,_rgba(0,255,231,0.12),_transparent_60%)] opacity-60" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,60,158,0.1),_transparent_60%)]" />
        <div className="absolute bottom-[-15%] left-24 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,181,0,0.08),_transparent_60%)]" />
      </div>

      {/* Page title */}
      <div className="relative z-20 text-center mb-16">
        <h1 className="text-5xl sm:text-6xl pb-4 lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] animate-gradient-x">
          $Noventra Token Roadmap
        </h1>
        <p className="mt-4 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-up">
          A strategic timeline highlighting milestones, development phases, and growth for $Noventra token adoption.
        </p>
      </div>

      {/* Roadmap timeline */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-center md:items-start gap-12">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#00FFE7] via-[#FF3C9E] to-[#FFB500] opacity-30 -translate-x-1/2 pointer-events-none" />

        {roadmapPhases.map((phase, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={phase.title}
              className={cn(
                "relative w-full md:w-1/2 px-4 md:px-8 animate-fade-up",
                isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              )}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Connector dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 md:top-6 w-5 h-5 rounded-full shadow-lg"
                style={{ backgroundColor: phase.color }}
              />
              <div className="bg-black/70 border border-white/10 backdrop-blur-2xl rounded-3xl px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: phase.color }}>
                  {phase.title}
                </h2>
                <span className="text-slate-400 text-sm">{phase.timeframe}</span>
                <ul className="mt-3 text-slate-300 text-sm sm:text-base list-disc list-inside space-y-1">
                  {phase.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center relative z-20">
        <p className="text-slate-300 text-lg sm:text-xl mb-6 animate-fade-up delay-900">
          Follow the Noventra roadmap as we scale our ecosystem and expand global adoption.
        </p>
      </div>

      <style>
        {`
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { opacity: 0; animation: fade-up 0.7s ease-out forwards; }

          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 7s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
