import React from "react";
import { FileText, ShieldCheck, AlertTriangle, Globe2, Zap, Scale, Mail } from "lucide-react";

export default function Terms() {
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
        <div className="terms-grid-mask absolute inset-0" />
      </div>

      {/* Halo rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full border border-white/5 blur-[1px] animate-terms-ring" />
        <div className="absolute w-[760px] h-[760px] rounded-full border border-white/5 blur-[2px] opacity-60 animate-terms-ring-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-terms-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl text-xs sm:text-sm text-slate-200 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            <span className="uppercase tracking-[0.2em] text-[0.7rem] text-slate-400">
              TERMS OF USE
            </span>
          </div>
        </div>

        {/* Title */}
        <header className="text-center mb-10 animate-terms-fade-up delay-terms-100">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent animate-terms-gradient-x">
              Ciphera Terms & Conditions
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using Ciphera’s multi‑chain token
            scanner, analytics, and AI‑powered risk scoring tools.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Intro callout */}
        <section className="relative mb-10 animate-terms-fade-up delay-terms-150">
          <div className="relative p-[1px] rounded-3xl bg-[conic-gradient(from_150deg,_rgba(0,255,231,0.45),_rgba(255,60,158,0.3),_rgba(255,181,0,0.32),_rgba(0,255,231,0.45))]">
            <div className="rounded-3xl bg-black/80 border border-white/10 backdrop-blur-2xl px-5 sm:px-7 py-6 sm:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] overflow-hidden">
                  <div className="absolute inset-0 blur-xl opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(0,255,231,0.8),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(255,60,158,0.8),transparent_55%)]" />
                  <FileText className="relative z-10 w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white">
                    Quick overview
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300/90">
                    Ciphera is an analytics tool. It does not execute trades, hold your
                    funds, or provide investment advice. You are responsible for your
                    decisions, your wallets, and complying with applicable laws.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-column overview */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 animate-terms-fade-up delay-terms-180">
          <MiniPoint
            icon={ShieldCheck}
            title="No financial advice"
            body="Risk scores and narratives are informational only and should not be treated as recommendations."
          />
          <MiniPoint
            icon={Zap}
            title="Analytics only"
            body="Ciphera reads on‑chain and market data to help you see risk; it does not execute transactions."
          />
          <MiniPoint
            icon={Globe2}
            title="Global access"
            body="You are responsible for using Ciphera only where it is lawful and compliant for you."
          />
        </section>

        {/* Main sections */}
        <section className="space-y-8 text-sm sm:text-[0.95rem] leading-relaxed">
          <TermsBlock
            icon={FileText}
            title="1. Acceptance of terms"
            paragraphs={[
              "By accessing or using Ciphera (including the web app, APIs, or any related services), you agree to be bound by these Terms & Conditions. If you do not agree, you must not use Ciphera.",
              "We may update these terms from time to time. When we do, we will update the “Last updated” date above and may provide additional notice within the product for material changes.",
            ]}
          />

          <TermsBlock
            icon={Zap}
            title="2. What Ciphera does"
            paragraphs={[
              "Ciphera is a token analysis tool. It aggregates public on‑chain data and third‑party market feeds to generate metrics, risk scores, and explanatory narratives about specific tokens and trading pairs.",
              "Ciphera does not custody assets, route trades, or act as a broker, exchange, advisor, or fiduciary. Any trading or on‑chain activity you perform after using Ciphera happens through separate wallets, protocols, or platforms that we do not control.",
            ]}
          />

          <TermsBlock
            icon={ShieldCheck}
            title="3. No investment, legal, or tax advice"
            paragraphs={[
              "Nothing in Ciphera should be interpreted as investment, legal, or tax advice. Risk scores, safety labels, and explanatory text are generated heuristics designed to highlight patterns, not promises about the future.",
              "You are solely responsible for evaluating any token, protocol, or trade. Always perform your own research and consider consulting qualified professionals before making financial decisions.",
            ]}
          />

          <TermsBlock
            icon={AlertTriangle}
            title="4. Risk of loss and blockchain risks"
            paragraphs={[
              "Digital assets, DeFi, and trading on public blockchains are inherently risky. Token prices can be highly volatile; markets can disappear; smart contracts can contain bugs; and malicious actors may attempt scams or exploits.",
              "By using Ciphera, you acknowledge that you may lose some or all of the value of any digital assets you buy, sell, or hold. Ciphera cannot prevent rug pulls, protocol exploits, market crashes, or adverse regulatory events.",
              "You use Ciphera entirely at your own risk. We do not guarantee the accuracy, completeness, or timeliness of data, and we are not responsible for losses arising from your reliance on Ciphera outputs.",
            ]}
          />

          <TermsBlock
            icon={Globe2}
            title="5. Eligibility and compliance"
            paragraphs={[
              "You may use Ciphera only if you are legally permitted to do so in your jurisdiction and are at least the minimum age of digital consent or majority in your region.",
              "You are responsible for ensuring that your use of Ciphera complies with all applicable laws and regulations, including those related to securities, derivatives, sanctions, and anti‑money‑laundering obligations.",
              "We may restrict or block access to Ciphera in certain regions or to certain users where we believe it is necessary for legal, risk, or compliance reasons.",
            ]}
          />

          <TermsBlock
            icon={FileText}
            title="6. Your responsibilities"
            paragraphs={[
              "You must not use Ciphera to break the law, to attempt to exploit or attack networks, or to engage in fraud, market manipulation, or any similar abusive behavior.",
              "You are responsible for securing your wallets, private keys, and devices. Ciphera will never ask you for your seed phrase or private key. Any wallet connections or transactions occur through external providers that you choose to use.",
              "You agree not to attempt to interfere with Ciphera’s infrastructure, reverse‑engineer non‑open parts of the service, or scrape data in a way that harms performance or violates any rate limits we set.",
            ]}
          />

          <TermsBlock
            icon={Scale}
            title="7. Intellectual property"
            paragraphs={[
              "Ciphera owns or licenses the rights to the software, design, branding, and original content of the platform. You may use the service as provided for your own lawful purposes, but this does not grant you ownership of any intellectual property.",
              "You may not copy, resell, or create competing services that are substantially based on Ciphera’s non‑public code or proprietary models, except where permitted by applicable law or open‑source licenses explicitly provided.",
            ]}
          />

          <TermsBlock
            icon={AlertTriangle}
            title="8. Disclaimers and limitation of liability"
            paragraphs={[
              "Ciphera is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied. This includes, without limitation, any implied warranties of merchantability, fitness for a particular purpose, or non‑infringement.",
              "We do not warrant that Ciphera will be uninterrupted, error‑free, or completely secure. Data may be delayed, incomplete, or incorrect due to third‑party APIs, network conditions, or other factors outside our control.",
              "To the fullest extent permitted by law, Ciphera and its contributors will not be liable for any indirect, incidental, consequential, special, or exemplary damages, or for any loss of profits, revenue, data, or digital assets, arising out of or in connection with your use of the service.",
            ]}
          />

          <TermsBlock
            icon={ShieldCheck}
            title="9. Indemnification"
            paragraphs={[
              "You agree to indemnify and hold harmless Ciphera and its contributors from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use or misuse of Ciphera, (b) your violation of these terms, or (c) your violation of any applicable law or regulation.",
            ]}
          />

          <TermsBlock
            icon={Globe2}
            title="10. Third‑party links and services"
            paragraphs={[
              "Ciphera may display links to third‑party sites, protocols, or DEXs (for example, to let you view or trade a token). These destinations are not controlled by Ciphera, and we are not responsible for their content, security, or policies.",
              "Your use of any third‑party site or service is solely between you and that provider and is governed by their own terms and privacy policies.",
            ]}
          />

          <TermsBlock
            icon={FileText}
            title="11. Changes, suspension, and termination"
            paragraphs={[
              "We may modify, suspend, or discontinue any part of Ciphera at any time, with or without notice, including limiting certain features, chains, or regions.",
              "We may suspend or terminate your access if we believe you have violated these terms, engaged in abusive behavior, or created risk for other users or the platform.",
            ]}
          />

          <TermsBlock
            icon={Scale}
            title="12. Governing law"
            paragraphs={[
              "These terms are governed by the laws that apply in the jurisdiction in which Ciphera is operated or administered, unless a different jurisdiction is required by mandatory local law.",
              "Any disputes arising out of or relating to these terms or your use of Ciphera will be subject to the exclusive jurisdiction of the competent courts in that jurisdiction, except where otherwise required by applicable law.",
            ]}
          />
        </section>
      </div>

      <style>
        {`
          .terms-grid-mask {
            background-image:
              linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
            background-size: 36px 36px;
            mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
            animation: terms-grid-move 28s linear infinite;
          }
          @keyframes terms-grid-move {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 80px 80px, 80px 80px; }
          }

          @keyframes terms-ring {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.05); opacity: 0.3; }
          }
          .animate-terms-ring { animation: terms-ring 18s ease-in-out infinite; }
          .animate-terms-ring-slow { animation: terms-ring 24s ease-in-out infinite; }

          @keyframes terms-fade-up {
            0% { opacity: 0; transform: translateY(20px) scale(0.99); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes terms-fade-down {
            0% { opacity: 0; transform: translateY(-16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-terms-fade-up {
            opacity: 0;
            animation: terms-fade-up 0.7s ease-out forwards;
          }
          .animate-terms-fade-down {
            opacity: 0;
            animation: terms-fade-down 0.7s ease-out forwards;
          }
          .delay-terms-100 { animation-delay: 0.1s; }
          .delay-terms-150 { animation-delay: 0.15s; }
          .delay-terms-180 { animation-delay: 0.18s; }

          @keyframes terms-gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-terms-gradient-x {
            background-size: 200% 200%;
            animation: terms-gradient-x 8s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
}

interface MiniPointProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}

function MiniPoint({ icon: Icon, title, body }: MiniPointProps) {
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

interface TermsBlockProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  paragraphs: string[];
  children?: React.ReactNode;
}

function TermsBlock({ icon: Icon, title, paragraphs, children }: TermsBlockProps) {
  return (
    <section className="relative p-[1px] rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(15,23,42,0.96))] animate-terms-fade-up">
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
          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-xs sm:text-[0.9rem] text-slate-300/90">
              {text}
            </p>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}