import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScanResults from "@/components/ScanResults";
import Documentation from "@/components/Documentation";
import WhitePaper from "@/components/WhitePaper";
import Contact from "@/components/Contact";
import TokenRoadmap from "@/components/TokenRoadmap";
import TokenMarketing from "@/components/TokenMarketing";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { scanToken } from "@/services/scanService";
import { ScanResult } from "@shared/types";

export default function Index() {
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await scanToken(address);

      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setError(response.error || "Failed to scan token");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred while scanning"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRescan = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <Hero onSearch={handleSearch} isLoading={isLoading} />

      {/* Results Section */}
      {isLoading && <LoadingSkeleton />}

      {error && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
            <p className="text-red-400 font-semibold">{error}</p>
            <p className="text-slate-400 text-sm mt-2">
              Please check the token address and try again
            </p>
          </div>
        </div>
      )}

      {result && <ScanResults result={result} onRescan={handleRescan} />}

      <Documentation />
      
      <WhitePaper />

      <Contact />

      <TokenRoadmap />

      <TokenMarketing />

      <Socials />

      <Footer />
    </div>
  );
}
