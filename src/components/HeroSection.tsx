import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePic from "../pics/prof.png"; // Adjust path if needed
import CobwebBackground from "./CobwebBackground";
const HeroSection: React.FC = () => {
  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative z-10 overflow-hidden"
    >
      <CobwebBackground />
      <div className="container">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Avatar */}
          <div
            className="flex justify-center mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-emerald-500 blur-2xl opacity-40 animate-pulse z-0" />

              {/* Avatar */}
              <Avatar className="relative h-52 w-52 sm:h-44 sm:w-44 border-4 border-emerald-500 shadow-lg shadow-emerald-500/20 z-10">
                <AvatarImage src={profilePic} alt="Profile Image" />
                <AvatarFallback className="bg-emerald-800 text-emerald-100 text-xl">
                  ME
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Text Content */}
          <div
            className="space-y-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
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
          </div>

          {/* CTA Buttons */}
          <div
            className="flex gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-700/20"
            >
              <a href="/Sayan_resume.pdf" download>
                Resume
              </a>
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
