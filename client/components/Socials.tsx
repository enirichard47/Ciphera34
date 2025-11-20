import React from "react";
import { Send, Twitter, Github } from "lucide-react";

export default function Socials() {
  return (
    <section className="relative min-h-[40vh] bg-black text-white px-6 sm:px-12 lg:px-24 py-20 overflow-hidden">

      {/* Glowing background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl pb-4 font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          Connect With Noventra
        </h1>
        <p className="text-slate-400 mt-4 text-lg">
          Stay updated. Join the community. Build with us.
        </p>
      </div>

      {/* Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        {/* Telegram */}
        <a
          href="https://t.me/NoventraAI"
          target="_blank"
          className="group relative border border-cyan-500/30 rounded-2xl p-8 
          backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 
          hover:scale-[1.03] shadow-xl hover:shadow-cyan-500/20"
        >
          <Send className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mt-4">Telegram</h2>
          <p className="text-slate-400 mt-2">Join our active community for updates and support.</p>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/NoventraAi"
          target="_blank"
          className="group relative border border-purple-500/30 rounded-2xl p-8 
          backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 
          hover:scale-[1.03] shadow-xl hover:shadow-purple-500/20"
        >
          <Twitter className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mt-4">Twitter</h2>
          <p className="text-slate-400 mt-2">Follow Noventra for announcements and news.</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/enirichard47/Ciphera.git"
          target="_blank"
          className="group relative border border-pink-500/30 rounded-2xl p-8 
          backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 
          hover:scale-[1.03] shadow-xl hover:shadow-pink-500/20"
        >
          <Github className="w-12 h-12 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mt-4">GitHub</h2>
          <p className="text-slate-400 mt-2">Explore open-source repos and contribute.</p>
        </a>

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
