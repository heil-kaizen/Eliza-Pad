
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onLaunchClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const wordsRow1 = ["Launch", "Your"];
  const wordsRow3 = ["with", "AI"];
  const wordsRow4 = ["Precision"];

  // Sequential loading state to handle various environment pathing
  const [imgSrc, setImgSrc] = useState('/ElizaPad.png');
  const [isLoading, setIsLoading] = useState(true);
  const [hasFailed, setHasFailed] = useState(false);

  const remoteMascot = "https://r2.erweima.ai/ai_image/3f7e6f66-3d2b-4d7a-8f8d-6d8b9d2e1b9b.jpg";

  const handleImageError = () => {
    console.log("Image load failed for:", imgSrc);
    if (imgSrc === '/ElizaPad.png') {
      // Try root-relative if absolute fails
      setImgSrc('ElizaPad.png');
    } else if (imgSrc === 'ElizaPad.png') {
      // Final fallback to high-quality CDN mirror
      setImgSrc(remoteMascot);
    } else {
      setHasFailed(true);
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Glow */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF9A1F]/30 bg-[#FF9A1F]/10 text-[#FF9A1F] text-[10px] font-orbitron mb-8 tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#FF9A1F] shadow-[0_0_8px_#FF9A1F]"></span>
              NEXT-GEN SOLANA INFRASTRUCTURE
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron leading-[1.1] mb-8 text-[#F8F9FA] tracking-tighter">
              <div className="flex flex-wrap gap-x-4">
                {wordsRow1.map((word, i) => (
                  <span key={i} className="tile-anim" style={{ animationDelay: `${i * 100}ms` }}>{word}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-x-4">
                <span className="tile-anim text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A1F] to-[#F8F9FA]" style={{ animationDelay: '250ms' }}>
                  Solana
                </span>
                <span className="tile-anim text-[#4FD1FF]" style={{ animationDelay: '350ms' }}>
                  Coin
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4">
                {wordsRow3.map((word, i) => (
                  <span key={i} className="tile-anim" style={{ animationDelay: `${450 + (i * 100)}ms` }}>{word}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4">
                {wordsRow4.map((word, i) => (
                  <span key={i} className="tile-anim" style={{ animationDelay: `${650 + (i * 100)}ms` }}>{word}</span>
                ))}
              </div>
            </h1>

            <p className="text-lg text-[#9BA1A6] max-w-lg mb-12 font-medium leading-relaxed font-inter opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
              The world's first AI-curated launchpad. Privacy-focused, community-driven, and powered by Eliza AI.
            </p>

            <div className="flex flex-wrap gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
              <Link 
                to="/launch" 
                className="px-10 py-4 rounded-xl bg-[#FF9A1F] text-black font-orbitron font-black text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,154,31,0.3)] active:scale-95 flex items-center gap-3"
              >
                Launch Coin <span>→</span>
              </Link>
              <Link 
                to="/launches" 
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-[#F8F9FA] font-orbitron font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                Latest Launches
              </Link>
            </div>
          </div>

          {/* Right Section: Mascot Portal with Loading States */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-2 border-[#FF9A1F]/20 shadow-[0_0_60px_rgba(255,154,31,0.1)] overflow-hidden group bg-[#0E0F13]">
              
              {/* Background Layers */}
              <div className="absolute inset-0 bg-[radial-gradient(#FF9A1F_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
              
              {/* Portal Loading Shimmer */}
              {isLoading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-[#FF9A1F]/30 border-t-[#FF9A1F] rounded-full animate-spin mb-4"></div>
                  <span className="text-[10px] font-orbitron text-[#FF9A1F] tracking-[0.3em] animate-pulse">NEURAL SYNC...</span>
                </div>
              )}

              {/* Character Image */}
              <img 
                src={imgSrc} 
                alt="Eliza Mascot" 
                onLoad={() => setIsLoading(false)}
                onError={handleImageError}
                className={`w-full h-full object-cover animate-mascot transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95 blur-xl' : 'opacity-100 scale-100 blur-0'}`}
              />

              {/* Error State Fallback */}
              {hasFailed && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="font-orbitron">
                    <div className="text-[#FF9A1F] text-4xl mb-4">⚠</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest">Visual Matrix Disconnected</div>
                  </div>
                </div>
              )}

              {/* Holographic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-0 border-[20px] border-black/20 rounded-full pointer-events-none z-20"></div>
            </div>

            {/* Orbiting Tech Rings */}
            <div className="absolute -z-10 w-[110%] h-[110%] rounded-full border border-white/5 animate-[spin_20s_linear_infinite] opacity-20"></div>
            <div className="absolute -z-10 w-[120%] h-[120%] rounded-full border border-[#4FD1FF]/10 animate-[spin_30s_linear_infinite_reverse] opacity-20"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
