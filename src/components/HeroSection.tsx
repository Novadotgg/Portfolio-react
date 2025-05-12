
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-emerald-400 font-semibold text-lg md:text-xl">
              Welcome to my Portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Building <span className="text-gradient">stunning</span> digital experiences
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I create beautiful, responsive, and user-friendly web applications
            with modern technologies.
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-700/20">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
