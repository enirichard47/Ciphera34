import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavToScanForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("scan-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const handleNavToCommunity = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("community");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Scanner", href: "#scan-form", onClick: handleNavToScanForm },
    { name: "Docs", href: "#docs" },
    { name: "Community", href: "#community", onClick: handleNavToCommunity },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      {/* subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-shimmer pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17 relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="relative w- h-20 flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F94c0660e4d454d1ea9ecc9cdceeae4a4%2F8711d26c0d10460c9987ed2e0fc4bd7d?format=webp&width=800"
                alt="Ciphera"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold -ml-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Ciphera
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative z-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 z-10">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .animate-shimmer {
            background-size: 2000px 100%;
            animation: shimmer 10s linear infinite;
          }

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
    </header>
  );
}
