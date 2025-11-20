import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Scanner", href: "#hero" },
    { name: "Docs", href: "#docs" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="relative sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/70 backdrop-blur-xl">
      {/* Subtle animated gradient layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-shimmer" />
        <div className="absolute -left-1/3 top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent animate-header-streak" />
        <div className="absolute -right-1/3 bottom-0 h-px w-2/3 bg-gradient-to-l from-transparent via-pink-400/40 to-transparent animate-header-streak-late" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.7),transparent_60%)] blur-xl opacity-60 animate-logo-glow" />
              <div className="relative w-full h-full rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.9)] overflow-hidden">
                <img
                  src="/theLogo.png"
                  alt="Ciphera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold leading-none bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                NoventraAI 
              </span>
              <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-slate-400/80">
                AI Token Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-300/90 hover:text-cyan-300 transition-colors duration-200"
              >
                <span className="relative">
                  {link.name}
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-slate-600/60 to-transparent" />
            <a
              href="#hero"
              className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-black bg-[linear-gradient(120deg,#22d3ee,#a855f7,#fb7185,#22d3ee)] bg-[length:220%_220%] shadow-[0_10px_30px_rgba(0,0,0,0.9)] animate-gradient-button hover:-translate-y-[1px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.95)] transition-all duration-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80 animate-ping-slow" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </span>
              <span>Live Risk Scanner</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="relative inline-flex items-center justify-center rounded-full p-2 text-slate-200 hover:text-cyan-300 hover:bg-slate-800/70 border border-white/10 shadow-[0_0_18px_rgba(0,0,0,0.8)] transition-all duration-200"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={22} className="transition-transform duration-200 rotate-0" />
              ) : (
                <Menu size={22} className="transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-2xl transition-[max-height,opacity,transform] duration-300 ease-out ${
          mobileMenuOpen ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="px-4 pb-4 pt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800/70 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-1 border-t border-white/5 mt-2">
            <a
              href="#hero"
              className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-black bg-[linear-gradient(120deg,#22d3ee,#a855f7,#fb7185,#22d3ee)] bg-[length:220%_220%] animate-gradient-button shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80 animate-ping-slow" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <span>Live Risk Scanner</span>
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          html { scroll-behavior: smooth; }
          /* All previous animations stay the same */
          @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
          .animate-shimmer { background-size: 2000px 100%; animation: shimmer 14s linear infinite; }
          @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease-in-out infinite; }
          @keyframes gradient-move { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .animate-gradient-button { animation: gradient-move 5s ease-in-out infinite; }
          @keyframes logo-glow { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.06); opacity: 1; } }
          .animate-logo-glow { animation: logo-glow 6s ease-in-out infinite; }
          @keyframes header-streak { 0% { transform: translateX(-20%); opacity: 0; } 15% { opacity: 1; } 70% { transform: translateX(120%); opacity: 1; } 100% { transform: translateX(150%); opacity: 0; } }
          .animate-header-streak { animation: header-streak 12s ease-in-out infinite; }
          .animate-header-streak-late { animation: header-streak 13s ease-in-out 3s infinite; }
          @keyframes ping-slow { 0% { transform: scale(1); opacity: 0.8; } 70% { transform: scale(1.8); opacity: 0; } 100% { transform: scale(1.8); opacity: 0; } }
          .animate-ping-slow { animation: ping-slow 1.8s ease-out infinite; }
        `}
      </style>
    </header>
  );
}
