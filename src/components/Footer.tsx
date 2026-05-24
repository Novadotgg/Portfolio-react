
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, GraduationCap, ArrowUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: "https://github.com/Novadotgg", icon: <Github className="h-5 w-5" />, label: "Github" },
    { href: "https://www.linkedin.com/in/sayan-das-631751217", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://scholar.google.com/citations?hl=en&user=DW17ks4AAAAJ", icon: <GraduationCap className="h-5 w-5" />, label: "Google Scholar" },
    { href: "https://www.instagram.com/d_sayan_10_2?igsh=ZjZ0OGdzbzZ2YjY=", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  ];
  
  return (
    <footer ref={ref} className="bg-secondary py-12 relative">
      <div className={`container scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-2 logo-glow">Portfolio</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Created with ❤️
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social, idx) => (
            <a 
              key={social.label}
              href={social.href}
              className={`p-3 rounded-full bg-background/50 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] group scroll-reveal-scale ${isVisible ? 'revealed' : ''} stagger-${idx + 1}`}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-foreground/70 group-hover:text-emerald-400 transition-colors inline-block">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-muted-foreground/50 text-sm">
            © {currentYear} Sayan Das. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/30 flex items-center justify-center transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
