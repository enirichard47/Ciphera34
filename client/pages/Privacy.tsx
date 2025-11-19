import React from "react";
import { ShieldCheck, Lock, Database, Globe2, AlertTriangle, Clock, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-slate-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050816] to-black pointer-events-none" />

      {/* Radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[5%] w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(0,255,231,0.22),_transparent_60%)] opacity-90 mix-blend-screen" />
        <div className="absolute top-1/3 right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,60,158,0.2),_transparent_65%)] mix-blend-screen" />
        <div className="absolute bottom-[-25%] left-[30%] w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,181,0,0.22),_transparent_65%)] mix-blend-screen" />
      </div>

      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="privacy-grid-mask absolute inset-0" />
      </div>

      {/* Halo rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full border border-white/5 blur-[1px] animate-privacy-ring" />
        <div className="absolute w-[760px] h-[760px] rounded-full border border-white/5 blur-[2px] opacity-60 animate-privacy-ring-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-privacy-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl text-xs sm:text-sm text-slate-200 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span className="uppercase tracking-[0.2em] text-[0.7rem] text-slate-400">
              PRIVACY & DATA
            </span>
          </div>
        </div>

        {/* Title */}
        <header className="text-center mb-10 animate-privacy-fade-up delay-privacy-100">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent animate-privacy-gradient-x">
              Ciphera Privacy Notice
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            How we handle on-chain data, usage signals, and any information you share
            while using Ciphera’s multi-chain token scanner and AI risk engine.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Intro callout */}
        <section className="relative mb-10 animate-privacy-fade-up delay-privacy-150">
          <div className="relative p-[1px] rounded-3xl bg-[conic-gradient(from_150deg,_rgba(0,255,231,0.45),_rgba(255,60,158,0.3),_rgba(255,181,0,0.32),_rgba(0,255,231,0.45))]">
            <div className="rounded-3xl bg-black/80 border border-white/10 backdrop-blur-2xl px-5 sm:px-7 py-6 sm:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] overflow-hidden">
                  <div className="absolute inset-0 blur-xl opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(0,255,231,0.8),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(255,60,158,0.8),transparent_55%)]" />
                  <ShieldCheck className="relative z-10 w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white">
                    Simple summary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300/90">
                    Ciphera reads on-chain data and third‑party market feeds to build
                    risk scores. We don’t sell your personal information and we avoid
                    collecting more than we need to run the product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-column overview */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 animate-privacy-fade-up delay-privacy-180">
          <MiniStat
            icon={Database}
            title="On‑chain focus"
            body="We primarily work with public blockchain data, DEX pools, and market metrics around the tokens you scan."
          />
          <MiniStat
            icon={Lock}
            title="Minimal personal data"
            body="We avoid collecting names or identity documents. Some technical data is logged to keep the service running."
          />
          <MiniStat
            icon={Globe2}
            title="Third‑party APIs"
            body="We call providers such as DexScreener for pricing and liquidity data and respect their privacy terms."
          />
        </section>

        {/* Main content sections */}
        <section className="space-y-8 text-sm sm:text-[0.95rem] leading-relaxed">
          <PrivacyBlock
            icon={Database}
            title="1. What data Ciphera works with"
            items={[
              {
                heading: "On‑chain & market data",
                text: "Token contract addresses you paste, associated pools, liquidity, volume, market cap, holder distribution, and trade history. This data is public on the chain or exposed by DEX aggregators.",
              },
              {
                heading: "Usage & telemetry data",
                text: "High‑level app events like pages viewed, buttons clicked, approximate timestamps, and anonymous performance metrics. We use this to improve UX, reliability, and to understand which features matter.",
              },
              {
                heading: "Technical data",
                text: "IP address, browser type, device information, and basic request metadata as part of normal web server logs. These are used for abuse prevention, debugging, and security hardening.",
              },
            ]}
          />

          <PrivacyBlock
            icon={ShieldCheck}
            title="2. How we use your data"
            items={[
              {
                heading: "To provide token scans and risk analytics",
                text: "We combine public on‑chain data, external liquidity feeds, and Ciphera’s AI models to calculate and display risk scores, metrics, and narratives for the tokens you query.",
              },
              {
                heading: "To protect the platform",
                text: "We may monitor usage patterns to detect abuse, scraping, or attacks. Technical logs can be used to investigate and mitigate security incidents.",
              },
              {
                heading: "To improve Ciphera",
                text: "Aggregated and anonymised usage data helps us tune our risk models, decide which chains to support next, and refine UI flows.",
              },
            ]}
          />

          <PrivacyBlock
            icon={Globe2}
            title="3. Third‑party services"
            items={[
              {
                heading: "Market & on‑chain data providers",
                text: "Ciphera integrates with third‑party APIs like DexScreener and similar services to fetch price, liquidity, and activity data. These providers may process your IP and request metadata according to their own policies.",
              },
              {
                heading: "Analytics and logging",
                text: "We may use privacy‑conscious analytics or logging tools to understand performance and adoption. Where possible, data is aggregated or pseudonymised.",
              },
              {
                heading: "No selling of personal data",
                text: "We do not sell your personal information. If this ever changes, we will update this notice clearly and obtain any required consent.",
              },
            ]}
          />

          <PrivacyBlock
            icon={Lock}
            title="4. Storage, security & retention"
            items={[
              {
                heading: "Security measures",
                text: "We aim to apply industry‑standard safeguards such as TLS in transit, access controls, and restricted access to operational logs.",
              },
              {
                heading: "Retention",
                text: "Server logs and analytics data are retained only for as long as necessary to operate, secure, and improve Ciphera, or as required by applicable law.",
              },
              {
                heading: "Your responsibilities",
                text: "You are responsible for keeping your wallets, private keys, and endpoint devices secure. Ciphera never asks for your seed phrase or private key.",
              },
            ]}
          />

          <PrivacyBlock
            icon={AlertTriangle}
            title="5. Your choices & rights"
            items={[
              {
                heading: "Limiting data",
                text: "You can choose which tokens to scan and whether to use Ciphera through privacy‑sensitive networks like VPNs or privacy‑focused browsers.",
              },
              {
                heading: "Local settings",
                text: "Certain preferences may be stored in your browser (e.g., theme or UI settings). You can clear them at any time via your browser settings.",
              },
              {
                heading: "Legal rights",
                text: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict certain personal data we hold. See the contact section below to reach us.",
              },
            ]}
          />

          <PrivacyBlock
            icon={Clock}
            title="6. Changes to this notice"
            items={[
              {
                heading: "When we update",
                text: "We may revise this privacy notice as Ciphera evolves or regulations change. When we do, we will update the “Last updated” date at the top of this page.",
              },
              {
                heading: "Material changes",
                text: "If we make significant changes in how we handle data, we will provide a more prominent notice in the app or via other appropriate channels.",
              },
            ]}
          />

        </section>
      </div>

      <style>
        {`
          /* Grid background */
          .privacy-grid-mask {
            background-image:
              linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
            background-size: 36px 36px;
            mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
            animation: privacy-grid-move 28s linear infinite;
          }
          @keyframes privacy-grid-move {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 80px 80px, 80px 80px; }
          }

          /* Rings */
          @keyframes privacy-ring {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.05); opacity: 0.3; }
          }
          .animate-privacy-ring { animation: privacy-ring 18s ease-in-out infinite; }
          .animate-privacy-ring-slow { animation: privacy-ring 24s ease-in-out infinite; }

          /* Fade entrances */
          @keyframes privacy-fade-up {
            0% { opacity: 0; transform: translateY(20px) scale(0.99); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes privacy-fade-down {
            0% { opacity: 0; transform: translateY(-16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-privacy-fade-up {
            opacity: 0;
            animation: privacy-fade-up 0.7s ease-out forwards;
          }
          .animate-privacy-fade-down {
            opacity: 0;
            animation: privacy-fade-down 0.7s ease-out forwards;
          }
          .delay-privacy-100 { animation-delay: 0.1s; }
          .delay-privacy-150 { animation-delay: 0.15s; }
          .delay-privacy-180 { animation-delay: 0.18s; }

          /* Title gradient animation */
          @keyframes privacy-gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-privacy-gradient-x {
            background-size: 200% 200%;
            animation: privacy-gradient-x 8s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
}

interface MiniStatProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

function MiniStat({ icon: Icon, title, body }: MiniStatProps) {
  return (
    <div className="relative p-[1px] rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(15,23,42,0.9))]">
      <div className="rounded-2xl bg-black/80 border border-white/10 backdrop-blur-2xl px-4 py-4 flex flex-col gap-2 shadow-[0_16px_40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xs sm:text-sm font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="text-xs sm:text-[0.8rem] text-slate-300/90 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

interface PrivacyBlockItem {
  heading: string;
  text: string;
}

interface PrivacyBlockProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: PrivacyBlockItem[];
  children?: React.ReactNode;
}

function PrivacyBlock({ icon: Icon, title, items, children }: PrivacyBlockProps) {
  return (
    <section className="relative p-[1px] rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(15,23,42,0.96))] animate-privacy-fade-up">
      <div className="rounded-3xl bg-black/80 border border-white/10 backdrop-blur-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
        <header className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] flex items-center justify-center text-white">
            <Icon className="w-4 h-4" />
          </div>
          <h2 className="text-sm sm:text-base font-semibold text-white">
            {title}
          </h2>
        </header>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.heading}>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-100 mb-1">
                {item.heading}
              </h3>
              <p className="text-xs sm:text-[0.9rem] text-slate-300/90">
                {item.text}
              </p>
            </div>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}