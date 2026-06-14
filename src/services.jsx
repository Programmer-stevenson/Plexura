import React, { useState } from 'react';
import { Code, Server, Smartphone, Shield, Database, Cloud, Lock, Zap, Users, Award, ArrowRight, CheckCircle, Layers, Globe, Terminal, Package, Cpu, HardDrive, Network, FileCode, Settings, GitBranch, Search, BarChart, TrendingUp, Activity, Eye, ShieldCheck, Monitor, Palette, Layout, Sparkles, Target, Rocket, X, Menu, Mail, ChevronRight, Linkedin, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './sections/Footer';
export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Navigate to home page and scroll to a section
  const goToSection = (sectionId) => {
    setMobileMenuOpen(false);
    navigate('/');
    // Try scrolling after page mounts; retry if element not found yet
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    setTimeout(() => tryScroll(), 150);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      id: 0,
      icon: Code,
      accentIcon: Terminal,
      title: "Web Development",
      tagline: "Building High-Performance Websites",
      description: "We create fast, reliable, and scalable websites using modern technologies. From simple business sites to complex web applications, we build solutions that grow with your business.",
      fullDescription: "Our web development expertise ensures your website is built on a solid technical foundation. We use cutting-edge frameworks and best practices to deliver websites that are fast, secure, and easy to maintain. Every line of code is written with performance and scalability in mind.",
      keyFeatures: [
        {
          icon: Zap,
          title: "Lightning-Fast Performance",
          description: "Optimized code and advanced caching for sub-second load times and 95+ PageSpeed scores"
        },
        {
          icon: Monitor,
          title: "Responsive & Mobile-First",
          description: "Flawless functionality across all devices with mobile-optimized experiences"
        },
        {
          icon: Search,
          title: "SEO-Optimized Code",
          description: "Clean, semantic HTML and technical SEO implementation for better search rankings"
        },
        {
          icon: Database,
          title: "Dynamic Functionality",
          description: "Custom features, databases, and integrations tailored to your business needs"
        },
        {
          icon: ShieldCheck,
          title: "Security Built-In",
          description: "SSL certificates, secure forms, and protection against common vulnerabilities"
        },
        {
          icon: Settings,
          title: "Easy to Maintain",
          description: "Clean, documented code and optional CMS integration for easy content updates"
        }
      ],
      technologies: [
        "React.js & Next.js",
        "JavaScript/TypeScript",
        "Node.js & Express",
        "WordPress & Webflow",
        "REST APIs",
        "MySQL & MongoDB",
        "Git & GitHub",
        "Vercel & Netlify"
      ],
      process: [
        {
          step: "01",
          title: "Planning & Strategy",
          description: "Define technical requirements, features, and project architecture"
        },
        {
          step: "02",
          title: "Development",
          description: "Build your website with clean, efficient code following best practices"
        },
        {
          step: "03",
          title: "Testing & QA",
          description: "Rigorous testing across browsers, devices, and performance benchmarks"
        },
        {
          step: "04",
          title: "Launch & Support",
          description: "Smooth deployment with ongoing maintenance and technical support"
        }
      ],
      outcomes: [
        "Fast, reliable website performance",
        "Improved search engine rankings",
        "Scalable foundation for future growth",
        "Reduced maintenance costs and technical debt"
      ]
    },
    {
      id: 1,
      icon: Palette,
      accentIcon: Layout,
      title: "Web Design",
      tagline: "Creating Beautiful Digital Experiences",
      description: "We design stunning, user-friendly websites that capture your brand identity and engage your audience. Every design decision is made with your users and business goals in mind.",
      fullDescription: "Great design is more than just aesthetics—it's about creating intuitive experiences that guide users and drive conversions. Our design process combines creativity with data-driven insights to deliver websites that look amazing and perform even better.",
      keyFeatures: [
        {
          icon: Palette,
          title: "Custom Brand Design",
          description: "Unique visual identity tailored to your brand with custom color schemes and typography"
        },
        {
          icon: Layout,
          title: "User Experience (UX)",
          description: "Intuitive navigation and user flows designed to guide visitors toward conversion"
        },
        {
          icon: Eye,
          title: "Visual Hierarchy",
          description: "Strategic placement of elements to highlight key messages and calls-to-action"
        },
        {
          icon: Sparkles,
          title: "Modern Aesthetics",
          description: "Contemporary designs that feel fresh and professional while remaining timeless"
        },
        {
          icon: Target,
          title: "Conversion-Focused",
          description: "Designs optimized to turn visitors into customers with strategic CTAs"
        },
        {
          icon: Smartphone,
          title: "Mobile-First Design",
          description: "Beautiful experiences on every screen size, from mobile to desktop"
        }
      ],
      technologies: [
        "Figma & Adobe XD",
        "Adobe Creative Suite",
        "Tailwind CSS",
        "CSS3 & Animations",
        "Responsive Frameworks",
        "Design Systems",
        "Prototyping Tools",
        "User Testing"
      ],
      process: [
        {
          step: "01",
          title: "Discovery & Research",
          description: "Understand your brand, audience, competitors, and design preferences"
        },
        {
          step: "02",
          title: "Wireframes & Concepts",
          description: "Create layout structures and initial design concepts for your feedback"
        },
        {
          step: "03",
          title: "High-Fidelity Design",
          description: "Develop detailed mockups with final colors, typography, and imagery"
        },
        {
          step: "04",
          title: "Handoff & Refinement",
          description: "Deliver design files and collaborate on final adjustments"
        }
      ],
      outcomes: [
        "Stronger brand presence and recognition",
        "Improved user engagement and time on site",
        "Higher conversion rates and lead generation",
        "Professional image that builds trust"
      ]
    },
    {
      id: 3,
      icon: Server,
      accentIcon: Settings,
      title: "IT Consulting",
      tagline: "Smart Technology Guidance for Your Business",
      description: "Navigate technology decisions with expert guidance. We provide practical IT consulting to help you choose the right tools, optimize your systems, and plan for growth.",
      fullDescription: "Whether you need help setting up your first website, choosing the right hosting, or planning your technology roadmap, we provide straightforward advice and hands-on support. Our consulting services are designed to demystify technology and empower your business.",
      keyFeatures: [
        {
          icon: Target,
          title: "Technology Planning",
          description: "Strategic guidance on choosing the right tools and platforms for your business needs"
        },
        {
          icon: Globe,
          title: "Domain & Hosting Setup",
          description: "Help with domain registration, hosting selection, email setup, and DNS configuration"
        },
        {
          icon: Monitor,
          title: "Website Maintenance",
          description: "Ongoing updates, backups, security patches, and performance monitoring for your site"
        },
        {
          icon: Users,
          title: "Technical Support",
          description: "Friendly, responsive support when you need help with your website or online tools"
        },
        {
          icon: TrendingUp,
          title: "Growth Consulting",
          description: "Advice on scaling your digital presence as your business grows and evolves"
        },
        {
          icon: ShieldCheck,
          title: "Security Basics",
          description: "Essential security setup including SSL certificates, backups, and best practices"
        }
      ],
      technologies: [
        "cPanel & WHM",
        "WordPress Admin",
        "Google Workspace",
        "Cloudflare",
        "SSL/TLS Certificates",
        "DNS Management",
        "FTP/SFTP",
        "Backup Solutions"
      ],
      process: [
        {
          step: "01",
          title: "Needs Assessment",
          description: "Understand your current setup, challenges, and goals for technology improvements"
        },
        {
          step: "02",
          title: "Recommendations",
          description: "Provide clear, jargon-free recommendations tailored to your budget and timeline"
        },
        {
          step: "03",
          title: "Implementation Support",
          description: "Help you set up and configure new tools with step-by-step guidance"
        },
        {
          step: "04",
          title: "Ongoing Support",
          description: "Available for questions, troubleshooting, and maintenance as your needs evolve"
        }
      ],
      outcomes: [
        "Confident technology decisions aligned with business goals",
        "Reliable website performance with proactive maintenance",
        "Reduced downtime and technical frustrations",
        "Clear path for scaling your digital infrastructure"
      ]
    },
    {
      id: 4,
      icon: TrendingUp,
      accentIcon: Search,
      title: "Digital Marketing & SEO",
      tagline: "Grow Your Reach and Get Found Online",
      description: "We help your business attract more customers through strategic digital marketing and search engine optimization. From ranking higher on Google to running effective campaigns, we drive real, measurable growth.",
      fullDescription: "Having a great website is only half the battle—people need to find it. Our digital marketing and SEO services boost your visibility, drive qualified traffic, and turn clicks into customers. We combine technical SEO, content strategy, and data-driven campaigns to help you grow sustainably.",
      keyFeatures: [
        {
          icon: Search,
          title: "Search Engine Optimization",
          description: "On-page and technical SEO to improve your rankings and get found by the right audience"
        },
        {
          icon: BarChart,
          title: "Performance Analytics",
          description: "Detailed tracking and reporting so you always know what's working and where to invest"
        },
        {
          icon: Target,
          title: "Targeted Ad Campaigns",
          description: "Strategic paid campaigns on Google and social platforms that reach your ideal customers"
        },
        {
          icon: FileCode,
          title: "Content Strategy",
          description: "Keyword-driven content that ranks well and genuinely engages your audience"
        },
        {
          icon: TrendingUp,
          title: "Conversion Optimization",
          description: "Turn more of your visitors into leads and customers with data-backed improvements"
        },
        {
          icon: Globe,
          title: "Local SEO",
          description: "Get found by nearby customers with Google Business Profile and local search optimization"
        }
      ],
      technologies: [
        "Google Analytics",
        "Google Search Console",
        "Google Ads",
        "Meta Ads Manager",
        "SEMrush & Ahrefs",
        "Google Business Profile",
        "Schema Markup",
        "Mailchimp"
      ],
      process: [
        {
          step: "01",
          title: "Audit & Research",
          description: "Analyze your current presence, keywords, competitors, and growth opportunities"
        },
        {
          step: "02",
          title: "Strategy & Setup",
          description: "Build a tailored marketing and SEO plan aligned with your goals and budget"
        },
        {
          step: "03",
          title: "Execution",
          description: "Implement optimizations, launch campaigns, and create content that performs"
        },
        {
          step: "04",
          title: "Measure & Refine",
          description: "Track results, report transparently, and continuously improve performance"
        }
      ],
      outcomes: [
        "Higher rankings and more organic traffic",
        "More qualified leads and customers",
        "Clear, measurable return on investment",
        "Stronger online visibility and brand awareness"
      ]
    },
  ];

  const currentService = mainServices[activeService];

  return (
    <div id='top' className="min-h-screen bg-[#0A0E12] text-[#F4FAFB] overflow-x-hidden">
      {/* Enhanced Animated Background with Mint Green */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0E12 0%, #11161C 45%, #181E25 70%, #0D1217 100%)' }} />
        <div className="absolute -top-56 right-[-12%] w-[64rem] h-[64rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, transparent 68%)' }} />
        <div className="absolute bottom-[-18rem] left-[-12%] w-[44rem] h-[44rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)' }} />
        {/* Desktop Version - Complex Animations */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        {/* Mobile Version - Simplified Animations */}
        <div className="md:hidden absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow delay-2000"></div>
        </div>
        
        {/* Animated Grid with Mint Tint */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>


      {/* Navigation - Matches App.jsx navbar */}
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0E12]/80 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#2DD4BF]/25' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-6 py-3 lg:py-4">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center group cursor-pointer">
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
      </Link>

      <style>{`
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
          60%, 63% { text-shadow: 0 0 20px rgba(194, 65, 12, 1), 0 0 35px rgba(234, 88, 12, 0.9), 0 0 50px rgba(125, 211, 252, 0.7), 0 0 70px rgba(125, 211, 252, 0.5); }
          65%, 95% { text-shadow: none; }
          97%, 100% { text-shadow: 0 0 20px rgba(194, 65, 12, 1), 0 0 35px rgba(234, 88, 12, 0.9), 0 0 50px rgba(125, 211, 252, 0.7), 0 0 70px rgba(125, 211, 252, 0.5); }
        }
        @keyframes logo-tech-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(125, 211, 252, 0.3)) drop-shadow(0 0 8px rgba(234, 88, 12, 0.2)) brightness(1);
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(125, 211, 252, 0.8)) drop-shadow(0 0 20px rgba(234, 88, 12, 0.5)) brightness(1.2);
            transform: scale(1.05);
          }
        }
        .logo-tech-pulse {
          animation: logo-tech-pulse 4s ease-in-out infinite;
        }
        @keyframes plexura-glow-slow {
          0%, 100% { color: #F4FAFB; text-shadow: none; }
          50% { color: #2DD4BF; text-shadow: 0 0 20px #2DD4BF, 0 0 30px #2DD4BF; }
        }
        .plexura-glow-slow {
          animation: plexura-glow-slow 10s ease-in-out infinite;
        }
      `}</style>

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-[#AEBAC4] hover:text-[#2DD4BF] transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2DD4BF] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-[#AEBAC4] hover:text-[#2DD4BF] transition-colors duration-200 relative group">
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2DD4BF] group-hover:w-full transition-all duration-300"></span>
        </Link>
        <a href="#" onClick={(e) => { e.preventDefault(); goToSection('about'); }} className="text-[#AEBAC4] hover:text-[#2DD4BF] transition-colors duration-200 relative group">
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2DD4BF] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); goToSection('team'); }} className="text-[#AEBAC4] hover:text-[#2DD4BF] transition-colors duration-200 relative group">
          Our Team
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2DD4BF] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); goToSection('contact'); }} className="px-6 py-2 bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2DD4BF]/40 transition-all duration-200">
          Contact Us
        </a>
      </div>

      <button 
        className="md:hidden p-2 text-[#F4FAFB] hover:text-[#2DD4BF] transition-colors"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>
    </div>
  </div>
</nav>

{/* Mobile Navigation - Matches App.jsx */}
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
                  <span key={index} className="inline-block text-[#F4FAFB]" style={{ marginLeft: index === 0 ? '-0.5em' : '0' }}>
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
          <a href="/" className="group block relative" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#2DD4BF]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/0 via-[#2DD4BF]/10 to-[#2DD4BF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F4FAFB] group-hover:text-[#2DD4BF] transition-colors duration-300">Home</span>
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
                  <span className="block text-xl font-semibold text-[#F4FAFB] group-hover:text-[#F87171] transition-colors duration-300">Services</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">What we offer</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F87171]/20 to-[#222B34]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#F87171] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>
          
          <a href="#" className="group block relative" onClick={(e) => { e.preventDefault(); goToSection('about'); }}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#222B34]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#222B34]/0 via-[#222B34]/10 to-[#222B34]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F4FAFB] group-hover:text-[#5EEAD4] transition-colors duration-300">About</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">How we build</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#222B34]/20 to-[#2DD4BF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#5EEAD4] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
          
          <a href="#" className="group block relative" onClick={(e) => { e.preventDefault(); goToSection('team'); }}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#F97316]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/10 to-[#F97316]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F4FAFB] group-hover:text-[#2DD4BF] transition-colors duration-300">Our Team</span>
                  <span className="block text-xs text-[#9FB6B2] mt-1">Meet the founders</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316]/20 to-[#2DD4BF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#2DD4BF] group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </a>
          
          <a href="#" className="group block relative" onClick={(e) => { e.preventDefault(); goToSection('contact'); }}>
            <div className="relative px-6 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#2DD4BF]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/0 via-[#2DD4BF]/10 to-[#2DD4BF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="block text-xl font-semibold text-[#F4FAFB] group-hover:text-[#2DD4BF] transition-colors duration-300">Contact</span>
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
          <div className="relative rounded-2xl bg-gradient-to-br from-[#F87171] via-[#2DD4BF] to-[#F87171] p-[2px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#F87171] to-[#2DD4BF] animate-gradient-shift"></div>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); goToSection('contact'); }}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl space-y-6">
            {/* Eyebrow */}
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#2DD4BF] animate-fadeInUp">
              Our Services
            </p>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="text-[#F4FAFB]">
                Enterprise Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2DD4BF] via-[#2DD4BF] to-[#2DD4BF] bg-clip-text text-transparent">
                Built for Growth
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-[#AEBAC4] leading-relaxed max-w-3xl animate-fadeInUp border-t border-[#F4FAFB]/10 pt-6 mt-2" style={{ animationDelay: '0.2s' }}>
              From concept to deployment, we deliver technology solutions that drive real business results. Expert development, strategic consulting, and robust security—all tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="relative py-8 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-4">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                    activeService === index
                      ? 'bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/20 border-2 border-[#2DD4BF] shadow-xl shadow-[#2DD4BF]/20'
                      : 'bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[#2DD4BF] shadow-md'
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] shadow-lg shadow-[#2DD4BF]/30'
                        : 'bg-[#2DD4BF]/10 group-hover:bg-[#2DD4BF]/20'
                    }`}>
                      <Icon size={28} className={`${activeService === index ? 'text-white' : 'text-[#14B8A6]'}`} />
                    </div>
                    <h3 className={`font-bold text-sm md:text-base ${
                      activeService === index ? 'text-[#F4FAFB]' : 'text-[#0A0E12] group-hover:text-[#142433]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  {activeService === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 via-[#2DD4BF]/10 to-transparent rounded-2xl animate-pulse-slow"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Service Header */}
          <div className="mb-16 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-2xl flex items-center justify-center shadow-2xl">
                  {React.createElement(currentService.icon, { size: 40, className: "text-white" })}
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#F4FAFB] mb-2">
                  {currentService.title}
                </h2>
                <p className="text-xl text-[#2DD4BF] font-semibold">
                  {currentService.tagline}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-[#AEBAC4] leading-relaxed max-w-4xl">
              {currentService.fullDescription}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <Sparkles className="text-[#2DD4BF]" size={28} />
              Key Capabilities
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {currentService.keyFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 md:p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-[#2DD4BF] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#2DD4BF]/10"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FeatureIcon size={24} className="text-[#14B8A6]" />
                      </div>
                      <h4 className="text-xl font-bold text-[#0A0E12] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-[#475569] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <Terminal className="text-[#2DD4BF]" size={28} />
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {currentService.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-[#0A0E12] font-medium group-hover:text-[#14B8A6] transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* Expected Outcomes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <TrendingUp className="text-[#2DD4BF]" size={28} />
              Expected Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentService.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md hover:border-[#2DD4BF] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-full flex items-center justify-center mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-[#0A0E12] text-lg leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#2DD4BF]/10 via-[#2DD4BF]/10 to-[#2DD4BF]/10 border-2 border-[#2DD4BF]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/5 to-transparent animate-pulse-slow"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#F4FAFB] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-[#AEBAC4] mb-8">
                Let's discuss how {currentService.title.toLowerCase()} can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); goToSection('contact'); }}
    className="group px-8 py-4 bg-gradient-to-r from-[#5EEAD4] to-[#14B8A6] hover:from-[#2DD4BF] hover:to-[#2DD4BF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 font-semibold"
  >
    <span>Start Your Project</span>
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </a>
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); goToSection('contact'); }}
    className="group px-8 py-4 bg-transparent border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#2DD4BF] rounded-lg transition-all duration-300 font-semibold"
  >
    Schedule Consultation
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-1500 {
          animation-delay: 1500ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Navbar-specific animations */
        @keyframes plexura-glow-slow {
          0% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
          3% {
            color: #2DD4BF;
            text-shadow: 0 0 10px #2DD4BF, 0 0 15px #2DD4BF;
            filter: drop-shadow(0 0 10px #2DD4BF) drop-shadow(0 0 15px #2DD4BF);
          }
          6% { 
            color: #2DD4BF;
            text-shadow: 0 0 20px #2DD4BF, 0 0 30px #2DD4BF, 0 0 40px #2DD4BF;
            filter: drop-shadow(0 0 20px #2DD4BF) drop-shadow(0 0 30px #2DD4BF);
          }
          9% {
            color: #2DD4BF;
            text-shadow: 0 0 10px #2DD4BF, 0 0 15px #2DD4BF;
            filter: drop-shadow(0 0 10px #2DD4BF) drop-shadow(0 0 15px #2DD4BF);
          }
          12% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
          100% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
        }
        
        .plexura-glow-slow {
          animation: plexura-glow-slow 10s ease-in-out infinite;
        }

        @keyframes logo-tech-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(125, 211, 252, 0.3)) 
                    drop-shadow(0 0 8px rgba(234, 88, 12, 0.2))
                    brightness(1);
            transform: scale(1) rotate(0deg);
          }
          25% {
            filter: drop-shadow(0 0 8px rgba(125, 211, 252, 0.6)) 
                    drop-shadow(0 0 16px rgba(234, 88, 12, 0.4))
                    drop-shadow(0 0 24px rgba(61, 43, 95, 0.3))
                    brightness(1.15);
            transform: scale(1.03) rotate(1deg);
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(125, 211, 252, 0.8)) 
                    drop-shadow(0 0 20px rgba(234, 88, 12, 0.5))
                    drop-shadow(0 0 32px rgba(61, 43, 95, 0.4))
                    brightness(1.2);
            transform: scale(1.05) rotate(0deg);
          }
          75% {
            filter: drop-shadow(0 0 8px rgba(125, 211, 252, 0.6)) 
                    drop-shadow(0 0 16px rgba(234, 88, 12, 0.4))
                    drop-shadow(0 0 24px rgba(61, 43, 95, 0.3))
                    brightness(1.15);
            transform: scale(1.03) rotate(-1deg);
          }
        }
        
        .logo-tech-pulse {
          animation: logo-tech-pulse 4s ease-in-out infinite;
          transform-origin: center;
          will-change: filter, transform;
        }

        .logo-tech-pulse:hover {
          animation-duration: 2s;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes gradient-shift {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          height: 100%;
          width: 100%;
        }
      `}</style>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}