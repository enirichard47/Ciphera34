import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const strategyPoints = [
  {
    title: "Awareness & Branding",
    description:
      "Leverage social media, influencer partnerships, and NFT campaigns to create a strong brand presence and highlight the token's unique value.",
    color: "#00ffe7",
  },
  {
    title: "Community Building",
    description:
      "Engage crypto communities on Discord, Telegram, and Twitter. Host AMAs, contests, and challenges to drive loyalty and adoption.",
    color: "#ff3c9e",
  },
  {
    title: "Liquidity & Exchange Listings",
    description:
      "Ensure the token is available on multiple exchanges and maintain healthy liquidity pools to increase trading activity and trust.",
    color: "#ffb500",
  },
  {
    title: "Incentives & Rewards",
    description:
      "Launch staking programs, airdrops, and referral rewards to encourage holding and participation.",
    color: "#00ffe7",
  },
  {
    title: "Educational Campaigns",
    description:
      "Provide tutorials, blog posts, and videos explaining tokenomics, use-cases, and benefits to onboard new users.",
    color: "#ff3c9e",
  },
  {
    title: "Analytics & Feedback",
    description:
      "Monitor adoption metrics, user feedback, and token performance to refine marketing strategies continuously.",
    color: "#ffb500",
  },
];

export default function TokenMarketing() {
  return (
    <section className="relative min-h-[70vh] py-20 px-6 sm:px-12 lg:px-24 bg-black/90 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_top,_rgba(0,255,231,0.15),_transparent_60%)] opacity-80" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,60,158,0.12),_transparent_60%)]" />
        <div className="absolute bottom-[-15%] left-24 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,181,0,0.1),_transparent_60%)]" />
      </div>

      {/* Page title */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5x1 sm:text-6xl pb-4
         lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] animate-gradient-x">
          $Noventra Marketing Strategy
        </h1>
        <p className="mt-3 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-up">
          A structured roadmap to maximize adoption, community engagement, and token utility across chains.
        </p>
      </div>

      {/* Strategy sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {strategyPoints.map((point, idx) => (
          <div
            key={point.title}
            className={cn(
              "relative group p-[1px] rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(15,23,42,0.85))] animate-fade-up",
              idx === 0 ? "delay-300" :
              idx === 1 ? "delay-400" :
              idx === 2 ? "delay-500" :
              idx === 3 ? "delay-600" :
              idx === 4 ? "delay-700" : "delay-800"
            )}
          >
            <div className="relative h-full rounded-3xl bg-black/70 border border-white/10 backdrop-blur-2xl px-6 py-8 flex flex-col gap-3 shadow-[0_18px_40px_rgba(0,0,0,0.9)] overflow-hidden">
              <div
                className="pointer-events-none absolute -top-12 left-0 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ backgroundColor: point.color }}
              />
              <h2
                className="text-2xl sm:text-3xl font-extrabold drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]"
                style={{ color: point.color }}
              >
                {point.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300">{point.description}</p>
              <div className="mt-3 h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70 group-hover:w-28 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

     
      <style>
        {`
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { opacity: 0; animation: fade-up 0.7s ease-out forwards; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-800 { animation-delay: 0.8s; }
          .delay-900 { animation-delay: 0.9s; }

          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 7s ease-in-out infinite;
          }

          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-button {
            animation: gradient-move 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
