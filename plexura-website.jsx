import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Smartphone, Shield, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for maximum performance and scalability."
    },
    {
      icon: Server,
      title: "IT Services",
      description: "Comprehensive IT solutions including infrastructure setup, maintenance, and support for businesses of all sizes."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive design and mobile-first applications that deliver seamless experiences across all devices."
    },
    {
      icon: Shield,
      title: "Security & Support",
      description: "Enterprise-grade security implementations and ongoing technical support to keep your systems running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-[#EAEAEA] overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007BFF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00C2CB] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Flowing Wave Pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1440 320">
          <path fill="#142D4C" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1A2F]/95 backdrop-blur-md shadow-lg shadow-[#007BFF]/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Plexura</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200">Services</a>
              <a href="#about" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200">About</a>
              <a href="#contact" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200">Contact</a>
              <button className="px-6 py-2 bg-[#007BFF] hover:bg-[#00C2CB] text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#007BFF]/30">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#EAEAEA]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Services</a>
              <a href="#about" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">About</a>
              <a href="#contact" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Contact</a>
              <button className="w-full px-6 py-2 bg-[#007BFF] hover:bg-[#00C2CB] text-white rounded-lg transition-all duration-200">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#142D4C]/50 rounded-full border border-[#007BFF]/30">
                <MapPin size={16} className="text-[#00C2CB]" />
                <span className="text-sm text-[#A0A7B0]">Las Vegas Local Experts</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">
                  Enterprise Tech
                </span>
                <br />
                <span className="text-[#EAEAEA]">Local Touch</span>
              </h1>
              
              <p className="text-xl text-[#A0A7B0] leading-relaxed max-w-xl">
                Plexura delivers cutting-edge web development and IT services with the reliability and personal attention your business deserves.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-[#007BFF] hover:bg-[#00C2CB] text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-[#007BFF]/40 flex items-center justify-center space-x-2">
                  <span className="font-semibold">Start Your Project</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 rounded-lg transition-all duration-200">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Abstract Visual Element */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-96">
                {/* Circuitry Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="150" fill="none" stroke="#007BFF" strokeWidth="2" className="animate-spin-slow" />
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#00C2CB" strokeWidth="1" className="animate-spin-reverse" />
                    <circle cx="200" cy="200" r="90" fill="none" stroke="#007BFF" strokeWidth="2" className="animate-spin-slow" />
                    {[...Array(8)].map((_, index) => (
                      <line
                        key={index}
                        x1="200"
                        y1="200"
                        x2={200 + Math.cos((index * Math.PI) / 4) * 150}
                        y2={200 + Math.sin((index * Math.PI) / 4) * 150}
                        stroke="#142D4C"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00C2CB] rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#3EE4A8] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#007BFF] rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#0A1A2F] to-[#142D4C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">
                Built With Modern Technology
              </span>
            </h2>
            <p className="text-[#A0A7B0] text-lg">
              Leveraging cutting-edge tools to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Image 1 - Code/Development */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#142D4C] to-[#0A1A2F] p-8 flex items-center justify-center relative overflow-hidden">
                {/* Abstract Code Visualization */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, index) => (
                      <div
                        key={index}
                        className="absolute text-[#00C2CB] font-mono text-xs"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `fadeIn ${2 + Math.random() * 3}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      >
                        {'</>'}
                      </div>
                    ))}
                  </div>
                </div>
                
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80"
                  alt="Clean code on multiple monitors"
                  className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent opacity-60"></div>
                
                {/* Tech Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#007BFF]/90 backdrop-blur-sm rounded-lg border border-[#00C2CB]/30">
                  <span className="text-white font-semibold text-sm">Full-Stack Development</span>
                </div>
              </div>
            </div>

            {/* Image 2 - Cloud/Infrastructure */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-[#142D4C] to-[#0A1A2F] p-8 flex items-center justify-center relative overflow-hidden">
                {/* Abstract Network Visualization */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {[...Array(15)].map((_, index) => (
                      <circle
                        key={index}
                        cx={Math.random() * 400}
                        cy={Math.random() * 300}
                        r="3"
                        fill="#007BFF"
                        className="animate-pulse"
                        style={{ animationDelay: `${Math.random() * 2}s` }}
                      />
                    ))}
                  </svg>
                </div>
                
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                  alt="Digital network and cloud infrastructure"
                  className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent opacity-60"></div>
                
                {/* Tech Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#00C2CB]/90 backdrop-blur-sm rounded-lg border border-[#007BFF]/30">
                  <span className="text-white font-semibold text-sm">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#EAEAEA]">Our </span>
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-[#A0A7B0] text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to elevate your business in the digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#007BFF]/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#EAEAEA]">{service.title}</h3>
                <p className="text-[#A0A7B0] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-[#142D4C]/50 to-[#0A1A2F]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">50+</div>
              <div className="text-[#A0A7B0]">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">100%</div>
              <div className="text-[#A0A7B0]">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">24/7</div>
              <div className="text-[#A0A7B0]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#EAEAEA]">Ready to Transform Your </span>
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Digital Presence?</span>
          </h2>
          <p className="text-xl text-[#A0A7B0]">
            Let's discuss how Plexura can help your business thrive in the digital age
          </p>
          <button className="group px-10 py-5 bg-[#007BFF] hover:bg-[#00C2CB] text-white text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-[#007BFF]/40 flex items-center justify-center space-x-2 mx-auto">
            <span className="font-semibold">Schedule a Consultation</span>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[#142D4C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">P</span>
                </div>
                <span className="text-2xl font-bold">Plexura</span>
              </div>
              <p className="text-[#A0A7B0]">
                Your trusted partner for web development and IT services in Las Vegas
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#EAEAEA]">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Services</a>
                <a href="#about" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">About Us</a>
                <a href="#contact" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#EAEAEA]">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#A0A7B0]">
                  <MapPin size={18} className="text-[#00C2CB]" />
                  <span>Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-[#A0A7B0]">
                  <Mail size={18} className="text-[#00C2CB]" />
                  <span>contact@plexura.com</span>
                </div>
                <div className="flex items-center space-x-2 text-[#A0A7B0]">
                  <Phone size={18} className="text-[#00C2CB]" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#142D4C] text-center text-[#A0A7B0]">
            <p>&copy; 2025 Plexura. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}