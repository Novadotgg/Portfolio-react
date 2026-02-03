
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Papers', href: '#papers' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-muted py-3' : 'py-5'
    )}>
      <nav className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight text-gradient">Portfolio</a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium transition-colors hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={cn(
              "relative w-12 h-12 flex items-center justify-center transition-all duration-300 rounded-xl",
              isOpen ? "bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]" : "hover:bg-white/5"
            )}
          >
            <div className="relative w-6 h-5 flex flex-col items-end justify-between">
              <span className={cn(
                "h-0.5 bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]",
                isOpen ? "w-6 rotate-[135deg] translate-y-[9px] bg-emerald-400" : "w-6"
              )} />
              <span className={cn(
                "h-0.5 bg-foreground rounded-full transition-all duration-400 ease-in-out",
                isOpen ? "w-0 opacity-0 -translate-x-4" : "w-4"
              )} />
              <span className={cn(
                "h-0.5 bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]",
                isOpen ? "w-6 -rotate-[135deg] -translate-y-[9px] bg-emerald-400" : "w-2"
              )} />
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border py-4 md:hidden animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
