
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePic from '../pics/prof.png'; // Relative path from hero.tsx

{/* <AvatarImage src={profilePic} alt="Profile Image" /> */}

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* <Avatar className="h-52 w-52 border-4 border-emerald-500 shadow-lg shadow-emerald-500/20">
              <AvatarImage src="/placeholder.svg" alt="Profile Image" />
              <AvatarFallback className="bg-emerald-800 text-emerald-100 text-xl">ME</AvatarFallback>
            </Avatar> */}
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-emerald-500 blur-2xl opacity-50 animate-pulse z-0" />
              
              {/* Avatar on top */}
              <Avatar className="relative h-52 w-52 border-4 border-emerald-500 shadow-lg shadow-emerald-500/20 z-10">
                {/* <AvatarImage src=".././pics/profile.jpg" alt="Profile Image" /> */}
                <AvatarImage src={profilePic} alt="Profile Image" />
                <AvatarFallback className="bg-emerald-800 text-emerald-100 text-xl">ME</AvatarFallback>
              </Avatar>
  </div>
          </div>
          
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-emerald-400 font-semibold text-lg md:text-xl">
              Hi!!!
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              I am <span className="text-gradient">Sayan </span> Let me show you my journey
            </h1>
          </div>
          
          {/* <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I am Computer Science Engineer with expertise in Data Structures & Algorithms, Machine Learning, NLP, Blockchain, Web & Android
 Development. Passionate about solving real-world problems with technology..
          </p> */}
          
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
