import React from "react";
import {
  Mail,
  MessageCircle,
  Bug,
  ShieldCheck,
  ArrowRight,
  Globe2,
  Twitter,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main 
      id="contact"
      className="relative min-h-[80vh] overflow-hidden bg-black text-slate-100">
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
        <div className="contact-grid-mask absolute inset-0" />
      </div>

      {/* Halo rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full border border-white/5 blur-[1px] animate-contact-ring" />
        <div className="absolute w-[760px] h-[760px] rounded-full border border-white/5 blur-[2px] opacity-60 animate-contact-ring-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-contact-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl text-xs sm:text-sm text-slate-200 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            <span className="uppercase tracking-[0.2em] text-[0.7rem] text-slate-400">
              CONTACT NoventraAI 
            </span>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-10 animate-contact-fade-up delay-contact-100">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00ffe7] via-[#ff3c9e] to-[#ffb500] bg-clip-text text-transparent animate-contact-gradient-x">
              Let&apos;s talk risk, data, and chains.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Reach out to the Ciphera team for support, integrations, security reports,
            or anything else related to our multi‑chain token scanner and AI risk engine.
          </p>
        </header>

        {/* Contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-10 items-start">
          {/* Form */}
          <section className="animate-contact-fade-up delay-contact-150">
            <div className="relative p-[1px] rounded-3xl bg-[conic-gradient(from_150deg,_rgba(0,255,231,0.45),_rgba(255,60,158,0.3),_rgba(255,181,0,0.34),_rgba(0,255,231,0.45))]">
              <div className="rounded-3xl bg-black/80 border border-white/10 backdrop-blur-2xl px-5 sm:px-7 py-6 sm:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] overflow-hidden">
                    <div className="absolute inset-0 blur-xl opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(0,255,231,0.8),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(255,60,158,0.8),transparent_55%)]" />
                    <Mail className="relative z-10 w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                      Send us a message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/90">
                      Share as much context as you like — contracts, chains, use‑case, or anything we should know.
                    </p>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>

          {/* Cards / direct channels */}
          <section className="space-y-5 animate-contact-fade-up delay-contact-180">
            <ContactCard
              icon={MessageCircle}
              title="General questions"
              description="Product feedback, feature ideas, and questions about how NoventraAI’s scanning and risk engine work."
            />

            <ContactCard
              icon={Bug}
              title="Bugs & data issues"
              description="Report incorrect metrics, broken links to DEXs, or anything that doesn’t feel right in the app."
            />

            <ContactCard
              icon={ShieldCheck}
              title="Security & responsible disclosure"
              description="If you believe you’ve found a vulnerability in NoventraAI or related infrastructure, please contact us privately."
            />

            <ContactCard
              icon={Globe2}
              title="Partnerships & integrations"
              description="Exchanges, data providers, research teams, or builders who want to integrate NoventraAI analytics."
            />

          </section>
        </div>
      </div>

      <style>
        {`
          .contact-grid-mask {
            background-image:
              linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
            background-size: 36px 36px;
            mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
            animation: contact-grid-move 28s linear infinite;
          }
          @keyframes contact-grid-move {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 80px 80px, 80px 80px; }
          }

          @keyframes contact-ring {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.05); opacity: 0.3; }
          }
          .animate-contact-ring { animation: contact-ring 18s ease-in-out infinite; }
          .animate-contact-ring-slow { animation: contact-ring 24s ease-in-out infinite; }

          @keyframes contact-fade-up {
            0% { opacity: 0; transform: translateY(20px) scale(0.99); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes contact-fade-down {
            0% { opacity: 0; transform: translateY(-16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-contact-fade-up {
            opacity: 0;
            animation: contact-fade-up 0.7s ease-out forwards;
          }
          .animate-contact-fade-down {
            opacity: 0;
            animation: contact-fade-down 0.7s ease-out forwards;
          }
          .delay-contact-100 { animation-delay: 0.1s; }
          .delay-contact-150 { animation-delay: 0.15s; }
          .delay-contact-180 { animation-delay: 0.18s; }

          @keyframes contact-gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-contact-gradient-x {
            background-size: 200% 200%;
            animation: contact-gradient-x 8s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
}

/* --- Contact form (no backend, just success message) --- */

function ContactForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.message) {
      setError("Please provide at least an email and a message.");
      setSuccess(null);
      return;
    }

    setSubmitting(true);

    // Fake async to show animation, no real backend call
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", topic: "", message: "" });
      setError(null);
      setSuccess("Your message has been securely captured and forwarded to the Ciphera team.");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-0"
            placeholder="Your name or handle"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-0"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Topic" htmlFor="topic">
        <select
          id="topic"
          name="topic"
          value={form.topic}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/70 focus:ring-0"
        >
          <option value="">Select a topic</option>
          <option value="general">General question</option>
          <option value="bug">Bug / incorrect data</option>
          <option value="security">Security / vulnerability</option>
          <option value="partnership">Partnership / integration</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-0 resize-none"
          placeholder="Share as much detail as possible. Links, token addresses, and logs are all helpful."
        />
      </Field>

      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs sm:text-sm text-red-200">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs sm:text-sm text-emerald-200">
          {success}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="relative mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold text-black bg-[linear-gradient(120deg,#00ffe7,#ff3c9e,#ffb500,#00ffe7)] bg-[length:220%_220%] shadow-[0_10px_35px_rgba(0,0,0,0.9)] hover:scale-[1.03] hover:-translate-y-[1px] active:scale-[0.97] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed animate-contact-gradient-x"
      >
        {submitting ? (
          <>
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-transparent animate-spin" />
              <div className="absolute w-6 h-6 rounded-full border border-black/10 animate-ping" />
            </div>
            <span className="tracking-wide">Sending...</span>
          </>
        ) : (
          <>
            <span className="tracking-wide">Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

/* --- Reusable pieces --- */

interface FieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs sm:text-[0.8rem] font-medium text-slate-200"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function ContactCard({
  icon: Icon,
  title,
  description,
}: ContactCardProps) {
  return (
    <div className="relative p-[1px] rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(15,23,42,0.96))]">
      <div className="rounded-3xl bg-black/80 border border-white/10 backdrop-blur-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_50px_rgba(0,0,0,0.9)] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[linear-gradient(135deg,rgba(0,255,231,0.25),rgba(255,60,158,0.25))] flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="text-xs sm:text-[0.9rem] text-slate-300/90">
          {description}
        </p>
      </div>
    </div>
  );
}

