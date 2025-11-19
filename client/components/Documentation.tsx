import React from "react";
import { ChevronRight, Code, AlertCircle, Zap, BarChart3 } from "lucide-react";

export default function Documentation() {
  return (
    <section
      id="docs"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
    >
      {/* Background neon gradient / subtle particle overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f111a] via-[#1a1c2c] to-[#0f111a] -z-10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-[#ff3c9e]/10 rounded-full filter blur-3xl absolute top-0 left-10 animate-neon-orb" />
        <div className="w-80 h-80 bg-[#00ffe7]/10 rounded-full filter blur-3xl absolute bottom-20 right-0 animate-neon-orb animation-delay-4000" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ciphera leverages advanced analytics to scan tokens across multiple
          blockchains and deliver{" "}
          <span className="font-semibold text-cyan-300">
            real-time AI-powered risk assessment
          </span>
          .
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        <FeatureCard
          icon={Code}
          title="Multi-Chain Support"
          description="Scan tokens across 25+ blockchains including Ethereum, BSC, Polygon, Arbitrum, Optimism, Base, and more."
          colorFrom="#00ffe7"
          colorTo="#ff3c9e"
          index={0}
        />
        <FeatureCard
          icon={BarChart3}
          title="Real-Time Metrics"
          description="Get live price, liquidity, volume, market cap, and transaction history."
          colorFrom="#ff3c9e"
          colorTo="#ffb500"
          index={1}
        />
        <FeatureCard
          icon={AlertCircle}
          title="AI Risk Analysis"
          description="Algorithms evaluate token safety using liquidity, volume, and market indicators."
          colorFrom="#ffb500"
          colorTo="#00ffe7"
          index={2}
        />
        <FeatureCard
          icon={Zap}
          title="Instant Results"
          description="Enter a token address and receive a detailed analysis in seconds."
          colorFrom="#00ffe7"
          colorTo="#ffb500"
          index={3}
        />
        <FeatureCard
          icon={ChevronRight}
          title="Direct DEX Links"
          description="Access token trading on their respective DEX platforms instantly."
          colorFrom="#ff3c9e"
          colorTo="#00ffe7"
          index={4}
        />
        <FeatureCard
          icon={AlertCircle}
          title="Price Changes"
          description="Track price movements over 5-min, 1-hour, and 24-hour intervals."
          colorFrom="#ffb500"
          colorTo="#ff3c9e"
          index={5}
        />
      </div>

      {/* Risk Levels */}
      <div className="bg-black/40 border border-white/10 rounded-3xl p-8 mb-16 backdrop-blur-md relative z-10 animate-fade-in-up [animation-delay:200ms]">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-[#00ffe7] to-[#ff3c9e] rounded-full" />
          Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RiskLevelCard
            level="Low"
            score="0-30"
            color="green"
            description="Token has strong liquidity (>$250K), healthy trading volume, and solid market indicators."
            index={0}
          />
          <RiskLevelCard
            level="Medium"
            score="30-60"
            color="yellow"
            description="Token shows moderate risk with some concerning metrics. Exercise caution."
            index={1}
          />
          <RiskLevelCard
            level="High"
            score="60-100"
            color="red"
            description="Token carries significant risk with poor liquidity, low volume, or extreme volatility."
            index={2}
          />
        </div>
      </div>

      {/* API Section */}
      
      
      {/* FAQ Section */}
      <div className="relative z-10 animate-fade-in-up [animation-delay:400ms]">
        <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-[0.2em] text-slate-200">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="space-y-4">
          {[
            {
              question: "What is the liquidity metric?",
              answer:
                "Liquidity represents trading capital available in the pair. Higher liquidity means better price execution.",
            },
            {
              question: "How is the risk score calculated?",
              answer:
                "The risk score combines liquidity, trading volume, market cap, price volatility, and transaction patterns.",
            },
            {
              question: "What chains does Ciphera support?",
              answer:
                "We support 25+ major blockchains including Ethereum, BSC, Polygon, Arbitrum, Optimism, Base, Avalanche, Fantom, Solana, Zksync, Linea, and more.",
            },
            {
              question: "How often is data updated?",
              answer:
                "Price and volume data is fetched in real-time from DexScreener API with automatic retries for reliability.",
            },
            {
              question: "Can I invest based on Ciphera results alone?",
              answer:
                "No. Ciphera is a scanning tool for assessment. Always conduct your own research before investing.",
            },
          ].map((faq, idx) => (
            <FAQItem key={idx} {...faq} index={idx} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes neon-orb {
            0%, 100% { transform: translate(0,0) scale(1); opacity: 0.9; }
            25% { transform: translate(25px,-30px) scale(1.05); opacity: 1; }
            50% { transform: translate(-20px,25px) scale(0.95); opacity: 0.7; }
            75% { transform: translate(40px,40px) scale(1.02); opacity: 0.85; }
          }
          .animate-neon-orb { animation: neon-orb 10s infinite alternate; }
          .animation-delay-4000 { animation-delay: 4s; }

          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out both;
          }

          @keyframes float-soft {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-float-soft {
            animation: float-soft 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  index?: number;
}
function FeatureCard({
  icon: Icon,
  title,
  description,
  colorFrom,
  colorTo,
  index = 0,
}: FeatureCardProps) {
  return (
    <div
      className="bg-black/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,231,0.45)] transition-all duration-300 group animate-fade-in-up animate-float-soft"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colorFrom}33, ${colorTo}33)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-60 blur-xl"
          style={{
            background: `radial-gradient(circle at 30% 0%, ${colorFrom}66, transparent 60%), radial-gradient(circle at 70% 100%, ${colorTo}66, transparent 60%)`,
          }}
        />
        <Icon className="w-6 h-6 text-white relative z-10" />
      </div>
      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {title}
      </h4>
      <p className="text-slate-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface RiskLevelCardProps {
  level: string;
  score: string;
  color: "green" | "yellow" | "red";
  description: string;
  index?: number;
}
function RiskLevelCard({
  level,
  score,
  color,
  description,
  index = 0,
}: RiskLevelCardProps) {
  const colors = {
    green: "bg-green-500/10 border-green-500/30 text-green-400 shadow-[0_0_18px_rgba(34,197,94,0.25)]",
    yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400 shadow-[0_0_18px_rgba(234,179,8,0.25)]",
    red: "bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_18px_rgba(239,68,68,0.25)]",
  };
  return (
    <div
      className={`border rounded-2xl p-6 backdrop-blur-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${colors[color]} animate-fade-in-up`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <h4 className="text-xl font-bold mb-2">{level}</h4>
      <p className="text-sm font-mono mb-3 opacity-80">{score}</p>
      <p className="text-sm text-slate-200">{description}</p>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
}
function FAQItem({ question, answer, index = 0 }: FAQItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="bg-black/30 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.6)] animate-fade-in-up"
      style={{ animationDelay: `${400 + index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-black/50 transition-colors group"
      >
        <h5 className="font-semibold text-white group-hover:text-cyan-400 transition-all duration-300">
          {question}
        </h5>
        <ChevronRight
          className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`px-6 text-slate-300 bg-black/25 overflow-hidden transition-[max-height,opacity,transform] duration-400 ${
          open
            ? "max-h-40 opacity-100 py-4 translate-y-0 border-t border-white/10"
            : "max-h-0 opacity-0 -translate-y-1 border-t border-transparent"
        }`}
      >
        <p className="text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}