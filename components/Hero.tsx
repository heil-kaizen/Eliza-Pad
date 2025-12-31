
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onLaunchClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const wordsRow1 = ["Launch", "Your"];
  const wordsRow3 = ["with", "AI"];
  const wordsRow4 = ["Precision"];

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
              {/* Row 1: Launch Your */}
              <div className="flex flex-wrap gap-x-4">
                {wordsRow1.map((word, i) => (
                  <span key={i} className="tile-anim" style={{ animationDelay: `${i * 100}ms` }}>{word}</span>
                ))}
              </div>
              
              {/* Row 2: Solana Coin */}
              <div className="flex flex-wrap gap-x-4">
                <span className="tile-anim text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A1F] to-[#F8F9FA]" style={{ animationDelay: '250ms' }}>
                  Solana
                </span>
                <span className="tile-anim text-[#4FD1FF]" style={{ animationDelay: '350ms' }}>
                  Coin
                </span>
              </div>

              {/* Row 3: with AI */}
              <div className="flex flex-wrap gap-x-4">
                {wordsRow3.map((word, i) => (
                  <span key={i} className="tile-anim" style={{ animationDelay: `${450 + (i * 100)}ms` }}>{word}</span>
                ))}
              </div>

              {/* Row 4: Precision */}
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

            <div className="mt-16 flex items-center gap-8 text-[#9BA1A6]/40 font-orbitron text-[10px] tracking-[0.3em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9A1F] font-black">01</span> AI VERIFIED
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4FD1FF] font-black">02</span> RUG-PROOF
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF9A1F] font-black">03</span> NATIVE SOLANA
              </div>
            </div>
          </div>

          {/* Right Section: Updated Mascot Container to match the reference style */}
          <div className="relative flex justify-center items-center">
            {/* The "Rounded Section" - Custom Frame with Neon Glow */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-2 border-[#FF9A1F]/20 shadow-[0_0_60px_rgba(255,154,31,0.1)] overflow-hidden group">
              {/* Background Glow inside circle */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B23] to-black -z-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#FF9A1F_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
              
              {/* Outer Neon Ring Animation */}
              <div className="absolute inset-0 rounded-full border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-[#FF9A1F]/0 via-[#FF9A1F]/30 to-[#4FD1FF]/30 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Mascot Image - Filling the frame completely as requested */}
              <img 
                src="ElizaPad.png" 
                alt="Eliza Mascot" 
                className="w-full h-full object-cover animate-mascot"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Use the high-quality source that matches the anime style in your reference
                  target.src = "https://r2.erweima.ai/ai_image/3f7e6f66-3d2b-4d7a-8f8d-6d8b9d2e1b9b.jpg";
                }}
              />

              {/* Holographic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Orbiting Elements to enhance the cyberpunk feel */}
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
