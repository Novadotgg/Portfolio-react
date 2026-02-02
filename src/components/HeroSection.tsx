import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import profilePic from "../pics/prof.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative z-10 overflow-hidden bg-grid"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: "-5s" }} />

      <div className="container relative z-10 mt-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">

          {/* Status Badge */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new learnings
            </div>
          </div>

          {/* Avatar Area */}
          <div
            className="flex justify-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-emerald-500 blur-2xl opacity-20 animate-pulse z-0" />

                {/* Avatar */}
                <Avatar className="relative h-40 w-40 sm:h-48 sm:w-48 border-4 border-emerald-500/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] z-10 bg-emerald-950">
                  <AvatarImage src={profilePic} alt="Sayan" className="object-cover" />
                  <AvatarFallback className="bg-emerald-900 text-emerald-100 text-2xl font-bold">
                    SM
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <h2 className="text-emerald-400 font-semibold text-lg md:text-xl">
            Hi!!!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
              Sayan
            </span>{" "}
            <br />
            let me show you my journey
          </h1>

          {/* CTA Buttons */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/40 w-full sm:w-auto px-8"
              >
                <a href="/Sayan_resume.pdf" download>
                  Download Resume
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto px-8 border-emerald-500/30 hover:bg-emerald-500/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
