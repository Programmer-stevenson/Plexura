import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled, isMobile, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* ============================================ */}
{/* NAVIGATION */}
{/* ============================================ */}
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isMobile ? 'bg-[#0A0E12]/95 shadow-md shadow-black/40' : 'bg-[#0A0E12]/80 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#2DD4BF]/25') : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-6 py-3 lg:py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center group cursor-pointer">
        {/* Logo: glowing mark + lexura wordmark — same animation on all viewports */}
        <span className="text-3xl md:text-4xl font-bold tracking-tight relative">
          <span className="flex items-center">
            <span className="relative inline-block w-[2.4em] h-[2.4em]">
              <img 
                src="/plexxx.png"
                alt="Plexura" 
                className="logo-anim w-[2.4em] h-[2.4em] object-contain"
                style={{ 
                  animation: 'logo-tech-pulse 4s ease-in-out infinite, glow-mint 10s ease-in-out infinite',
                  '--logo-anim': 'logo-tech-pulse 4s ease-in-out infinite, glow-mint 10s ease-in-out infinite'
                }}
              />
            </span>

            {['l','e','x','u','r','a'].map((letter, index) => (
              <span
                key={index}
                className="logo-anim inline-block"
                style={{ 
                  marginLeft: index === 0 ? '-0.6em' : '0',
                  animation: `glow-mint 10s ease-in-out infinite ${(index + 1) * 0.05}s`,
                  '--logo-anim': `glow-mint 10s ease-in-out infinite ${(index + 1) * 0.05}s`
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
      </div>

      <style jsx>{`
        @keyframes logo-swap {
          0%, 40% { opacity: 1; transform: scale(1) rotateY(0deg); filter: drop-shadow(0 0 20px rgba(125, 211, 252, 0.8)); }
          45%, 55% { opacity: 0; transform: scale(0.7) rotateY(90deg); filter: drop-shadow(0 0 30px rgba(125, 211, 252, 1)); }
          60%, 90% { opacity: 0; transform: scale(0.7) rotateY(-90deg); filter: drop-shadow(0 0 0px rgba(125, 211, 252, 0)); }
          93%, 97% { opacity: 0; transform: scale(0.7) rotateY(-90deg); filter: drop-shadow(0 0 35px rgba(125, 211, 252, 1)); }
          100% { opacity: 1; transform: scale(1) rotateY(0deg); filter: drop-shadow(0 0 20px rgba(125, 211, 252, 0.8)); }
        }
        @keyframes p-swap {
          0%, 40% { opacity: 0; transform: scale(0.7) rotateY(-90deg); filter: drop-shadow(0 0 0px rgba(125, 211, 252, 0)); }
          45%, 55% { opacity: 0; transform: scale(0.7) rotateY(-90deg); filter: drop-shadow(0 0 30px rgba(125, 211, 252, 1)); }
          60%, 90% { opacity: 1; transform: scale(1) rotateY(0deg); filter: drop-shadow(0 0 20px rgba(125, 211, 252, 0.8)); }
          93%, 97% { opacity: 0; transform: scale(0.7) rotateY(90deg); filter: drop-shadow(0 0 35px rgba(125, 211, 252, 1)); }
          100% { opacity: 0; transform: scale(0.7) rotateY(90deg); filter: drop-shadow(0 0 0px rgba(125, 211, 252, 0)); }
        }
        @keyframes letter-shift {
          0%, 55% { transform: translateX(0); }
          60%, 90% { transform: translateX(-9px); }
          95%, 100% { transform: translateX(0); }
        }
        @keyframes glow-mint {
          0%, 58% { text-shadow: none; }
          60%, 63% { text-shadow: 0 0 20px rgba(194, 65, 12, 1), 0 0 35px rgba(234, 88, 12, 0.9), 0 0 50px rgba(125, 211, 252, 0.7), 0 0 70px rgba(186, 230, 253, 0.5); }
          65%, 95% { text-shadow: none; }
          97%, 100% { text-shadow: 0 0 20px rgba(194, 65, 12, 1), 0 0 35px rgba(234, 88, 12, 0.9), 0 0 50px rgba(125, 211, 252, 0.7), 0 0 70px rgba(186, 230, 253, 0.5); }
        }
      `}</style>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-[#5B6B7A] hover:text-[#EA580C] transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] group-hover:w-full transition-all duration-300"></span>
        </a>
        <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-[#5B6B7A] hover:text-[#EA580C] transition-colors duration-200 relative group">
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <a href="#about" className="text-[#5B6B7A] hover:text-[#EA580C] transition-colors duration-200 relative group">
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#team" className="text-[#5B6B7A] hover:text-[#EA580C] transition-colors duration-200 relative group">
          Our Team
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA580C] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] text-[#06201C] font-bold rounded-lg hover:shadow-lg hover:shadow-[#2DD4BF]/40 transition-all duration-200">
          Contact Us
        </a>
      </div>

      <button 
  className="md:hidden p-2 text-[#EA580C] hover:text-[#EA580C] transition-colors"
  onClick={() => setMobileMenuOpen(true)}
>
  <Menu size={24} />
</button>
    </div>
  </div>
</nav>

{/* Mobile Navigation */}
{mobileMenuOpen && (
  <>
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
      onClick={() => setMobileMenuOpen(false)}
    />
    <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 md:hidden animate-slideInRight">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0F]/95 via-[#10151B]/95 to-[#222B34]/95 backdrop-blur-2xl"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#2DD4BF] via-[#F87171] to-[#222B34] shadow-lg shadow-[#2DD4BF]/50"></div>

      <div className="relative h-full flex flex-col">
        <div className="px-8 pt-8 pb-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-bold tracking-tight">
              <span className="flex items-center">
                <img src="/plexxx.png" alt="P" className="w-[2em] h-[2em] object-contain inline-block" />
                {['l','e','x','u','r','a'].map((letter, index) => (
                  <span key={index} className="inline-block text-[#F2F9FF]" style={{ marginLeft: index === 0 ? '-0.5em' : '0' }}>
                    {letter}
                  </span>
                ))}
              </span>
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 transition-all duration-300 group"
            >
              <X size={20} className="text-[#9FB6B2] group-hover:text-[#2DD4BF] transition-colors" />
            </button>
          </div>
          <p className="text-sm text-[#9FB6B2] font-light tracking-wide">Engineering Excellence</p>
        </div>

        <div className="flex-1 px-6 py-8 space-y-3 overflow-y-auto">
          <a href="#home" className="group block relative" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#2DD4BF]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/0 via-[#2DD4BF]/10 to-[#2DD4BF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F2F9FF] group-hover:text-[#2DD4BF] transition-colors duration-300">Home</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">Welcome page</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2DD4BF]/20 to-[#F87171]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#2DD4BF] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
          
          <Link to="/services" className="group block relative" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#F87171]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F87171]/0 via-[#F87171]/10 to-[#F87171]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F2F9FF] group-hover:text-[#F87171] transition-colors duration-300">Services</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">What we offer</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F87171]/20 to-[#222B34]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#F87171] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>
          
          <a href="#about" className="group block relative" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#222B34]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#222B34]/0 via-[#222B34]/10 to-[#222B34]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F2F9FF] group-hover:text-[#5EEAD4] transition-colors duration-300">About</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">How we build</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#222B34]/20 to-[#2DD4BF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#5EEAD4] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
          
          <a href="#team" className="group block relative" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#F97316]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/10 to-[#F97316]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F2F9FF] group-hover:text-[#2DD4BF] transition-colors duration-300">Our Team</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">Meet the founders</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316]/20 to-[#2DD4BF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#2DD4BF] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
          
          <a href="#contact" className="group block relative" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#2DD4BF]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/0 via-[#2DD4BF]/10 to-[#2DD4BF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F2F9FF] group-hover:text-[#2DD4BF] transition-colors duration-300">Contact</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">Get in touch</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2DD4BF]/20 to-[#F87171]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#2DD4BF] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="px-6 pb-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#F97316] via-[#2DD4BF] to-[#5EEAD4] p-[2px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#F97316] to-[#2DD4BF] animate-gradient-shift"></div>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="relative block w-full px-6 py-4 bg-[#12171D] rounded-2xl text-white font-semibold text-lg hover:bg-transparent transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#2DD4BF]/50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-[#9FB6B2]">
            <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2DD4BF] transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2DD4BF] transition-colors">Terms</Link>
            <span>•</span>
            <a href="#" className="hover:text-[#2DD4BF] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  </>
)}
    </>
  );
}
