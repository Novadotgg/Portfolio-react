
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Avatar className="h-32 w-32 border-4 border-emerald-500 shadow-lg shadow-emerald-500/20">
              <AvatarImage src="/placeholder.svg" alt="Profile Image" />
              <AvatarFallback className="bg-emerald-800 text-emerald-100 text-xl">ME</AvatarFallback>
            </Avatar>
          </div>
          
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
      </div>
    </section>
  );
};

export default HeroSection;
