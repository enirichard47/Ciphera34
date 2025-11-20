import React from "react";

export default function WhitePaper() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 sm:px-12 lg:px-32 py-20 overflow-hidden">

      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl pb-4 font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          NoventraAI Whitepaper
        </h1>
        <p className="text-slate-400 mt-4 text-lg">
          The intelligence layer powering the future of AI-driven blockchain security.
        </p>
      </div>

      {/* Whitepaper Content */}
      <div className="space-y-12 max-w-4xl mx-auto">

        {/* ABSTRACT */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Abstract</h2>
          <p className="text-slate-300 leading-relaxed">
            NoventraAI is a next-generation intelligence engine designed to analyze 
            blockchain tokens, smart contracts, and market behavior using advanced AI 
            models. By merging real-time on-chain data with predictive analytics, 
            NoventraAI empowers traders, developers, and institutions with accurate and 
            actionable risk insights.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">The Problem</h2>
          <p className="text-slate-300 leading-relaxed">
            The crypto ecosystem has become increasingly volatile, with AI-generated 
            scam tokens, predatory contracts, hidden backdoors, liquidity traps, 
            wash-trading, and sophisticated exploits.  
            The speed at which malicious actors operate now exceeds human capability.  
            Traders and developers lack reliable tools to understand real risk—before 
            it is too late.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-pink-500/20 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">The NoventraAI Solution</h2>
          <p className="text-slate-300 leading-relaxed">
            NoventraAI introduces an AI-powered risk engine that performs deep scanning 
            across multiple chains.  
            It evaluates smart contracts, deployer behavior, liquidity health, holder 
            patterns, mempool activity, market manipulation signals, and more.  
            The system converts over 200 data points into an actionable AI-generated 
            "Trust Score," enabling users to detect threats long before they become 
            visible on the surface.
          </p>
        </div>

        {/* TECHNOLOGY ARCHITECTURE */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Technology Architecture</h2>
          <p className="text-slate-300 leading-relaxed">
            NoventraAI operates on a layered intelligence architecture consisting of:
          </p>
          <ul className="text-slate-300 leading-relaxed mt-2 space-y-2">
            <li>• Multi-chain data aggregation</li>
            <li>• AI anomaly detection and behavioral modelling</li>
            <li>• On-chain + off-chain hybrid signals</li>
            <li>• Contract decompilation, permission analysis, and exploit prediction</li>
            <li>• Cross-reference with historical attack patterns</li>
            <li>• Adaptive learning models that improve with each scan</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-purple-400/20 rounded-2xl shadow-lg hover:shadow-purple-400/20 transition-all duration-300">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Security & Trust</h2>
          <p className="text-slate-300 leading-relaxed">
            NoventraAI is built with robust security protocols. Data is processed 
            through secure endpoints, and no private information or wallet metadata 
            is stored.  
            The platform also integrates cryptographic verification layers to ensure 
            data accuracy and protection from tampering.
          </p>
        </div>

        {/* ECOSYSTEM */}
        <div className="p-8 bg-white/5 backdrop-blur-lg border border-pink-400/20 rounded-2xl shadow-lg hover:shadow-pink-400/20 transition-all duration-300 mb-20">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Ecosystem Vision</h2>
          <p className="text-slate-300 leading-relaxed">
            NoventraAI aims to become the global intelligence layer for risk analysis 
            in Web3.  
            The ecosystem will support developers, traders, auditors, institutions, 
            and automated trading systems—providing accurate real-time safety signals 
            across chains.  
            As Web3 scales and AI becomes more integrated into trading, NoventraAI 
            acts as the defensive shield protecting users and protocols.
          </p>
        </div>

      </div>

      {/* Animations */}
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
