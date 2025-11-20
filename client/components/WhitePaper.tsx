import React from "react";

export default function WhitePaper() {
  const sections = [
    {
      title: "Abstract",
      color: "cyan",
      content: `NoventraAI introduces a real-time, multi-chain token intelligence platform for Web3. Combining live on-chain data aggregation, AI-driven risk scoring, and a multi-chain token scanner, NoventraAI empowers traders and developers with fast, transparent, and actionable insights. This whitepaper details the architecture, market approach, utility, tokenomics, and governance.`
    },
    {
      title: "1. Vision & Rationale",
      color: "purple",
      content: `NoventraAI aims to make Web3 safer, more predictable, and user-aligned:

- Live Intelligence: Aggregating real-time token metrics across chains.
- AI-Powered Risk Assessment: Detecting rug-pulls, honeypots, and volatility.
- Multi-Chain Coverage: Ethereum, BSC, Polygon, Avalanche, and more.

By focusing on actionable insights rather than speculation, NoventraAI empowers participants to confidently engage with decentralized ecosystems.`
    },
    {
      title: "2. Network Layer: Data Aggregation & Streaming",
      color: "pink",
      content: `A high-throughput, multi-chain data pipeline ensures:

- Event Streaming: Captures token transfers, liquidity changes, and volume metrics.
- Real-Time Finality: Ensures up-to-date analytics for traders.
- Scalable Nodes: Parallel ingestion supports thousands of token feeds without lag.

This supports instant decision-making for trading, auditing, and monitoring.`
    },
    {
      title: "3. Market Layer: Token Analytics & Bonding Curve Integration",
      color: "cyan",
      content: `NoventraAI provides:

- Dynamic Token Insights: Real-time price, liquidity, and holder distribution.
- Bonding Curve Integration: Optional curves for ecosystem tokens ensure predictable minting/burning.
- Adjustable Parameters: Users configure alerts, thresholds, and analytics dashboards.

Continuous, reliable data helps stabilize emerging tokens and markets.`
    },
    {
      title: "4. Intelligence Layer: AI Guardian",
      color: "purple",
      content: `The AI Guardian monitors on-chain telemetry and assigns risk scores:

- Rug-Pull & Honeypot Detection: Analyzes smart contracts for exploit patterns.
- Predictive Analytics: Evaluates volatility and potential manipulation.
- Human Oversight: DAO/multisig ratifies recommendations for transparency.

Combining AI with governance reduces risk while maintaining trustless participation.`
    },
    {
      title: "5. Utility: Multi-Chain Token Scanner",
      color: "pink",
      content: `Users benefit from:

- Paste-and-Scan: Assess token contracts instantly.
- Live Updates: Continuous liquidity, volume, and holder metrics.
- Cross-Chain Support: Ethereum, BSC, Polygon, Avalanche, and more.
- Community Pool: Risk scores contribute to DAO-managed analytics.

NoventraAI converts token evaluation into verifiable, real-time insight.`
    },
    {
      title: "6. Utility: Developer & Ecosystem Tools",
      color: "cyan",
      content: `- API Access: Stream real-time data into applications.
- Custom Dashboards: Track favorite tokens or portfolios.
- dApp Integration: Provides confidence for developers.
- Liquidity Support: Bonding-curve mechanisms stabilize new tokens.`
    },
    {
      title: "7. Tokenomics Overview",
      color: "purple",
      content: `Token: Noventra
Total Supply: 1,000,000,000 Noventra

Distribution:
 • 100% of supply deposited into the Pump.fun bonding curve
 • LP automatically created on Raydium once the curve finalizes
 • No team allocation
 • No presale or private sale
 • No vesting or locked team tokens

Liquidity:
 • Auto-added by Pump.fun
 • Liquidity permanently locked by platform mechanics

Taxes:
 • 0% buy
 • 0% sell

Launch Type:
 • Pure fair-launch through bonding curve mechanics
 • Fully community-driven startity Programs: 15%

Tokens enable staking for analytics, governance voting, and contributions to multi-chain intelligence.`
    },
    {
      title: "8. Governance",
      color: "pink",
      content: `NoventraAI’s path to decentralization:

- Phase 1: Multisig oversight of key parameters.
- Phase 2: DAO voting for risk thresholds, bonding curve, and liquidity.
- Phase 3: AI Guardian proposals executed only with DAO approval.

Ensures transparent, evidence-based decisions while protecting the community.`
    },
    {
      title: "9. Roadmap",
      color: "cyan",
      content: `**Q4 2025**
- NVAI token launch
- MVP multi-chain scanner live
- AI Guardian alpha

**Q1 2026**
- API release
- Advanced analytics dashboard
- Integration with new chains

**Q2 2026**
- DAO governance beta
- Community staking & incentive program
- AI Guardian predictive updates

**Q3-Q4 2026**
- Governance & treasury decentralization
- Support for 15+ chains
- Charity and social-impact integration`
    },
    {
      title: "10. Conclusion",
      color: "purple",
      content: `NoventraAI transforms token evaluation into a predictable, transparent, AI-supported ecosystem. By unifying multi-chain insights, AI-driven scoring, and DAO governance, traders and developers can confidently participate in Web3 without relying on speculation.`
    },
  ];

  const colorMap: Record<string, string> = {
    cyan: "cyan-400",
    purple: "purple-400",
    pink: "pink-400"
  };

  return (
    <section 
      id="whitepaper"
      className="relative min-h-screen bg-black text-white px-6 sm:px-12 lg:px-32 py-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl pb-4 font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          NoventraAI Whitepaper
        </h1>
        <p className="text-slate-400 mt-4 text-lg">
          The intelligence layer powering AI-driven multi-chain token security.
        </p>
      </div>

      {/* Whitepaper Sections */}
      <div className="space-y-12 max-w-4xl mx-auto">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`p-8 bg-white/5 backdrop-blur-lg border border-${colorMap[sec.color]}/20 rounded-2xl shadow-lg hover:shadow-${colorMap[sec.color]}/20 transition-all duration-300`}
          >
            <h2 className={`text-3xl font-bold text-${colorMap[sec.color]} mb-4`}>
              {sec.title}
            </h2>
            <p className="text-slate-300 whitespace-pre-line leading-relaxed">{sec.content}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
