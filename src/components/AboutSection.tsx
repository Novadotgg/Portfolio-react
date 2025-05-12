
import React from 'react';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About <span className="text-gradient">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me and my background.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer with a strong focus on creating engaging user experiences.
              My journey in web development started several years ago, and I've been in love with creating
              digital experiences ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in front-end development using modern technologies like React, TypeScript, and 
              Tailwind CSS. I believe in writing clean, maintainable code that provides an exceptional 
              user experience.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying nature.
            </p>
          </div>
          
          <div className="bg-secondary/50 p-8 rounded-lg shadow-lg border border-muted">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <User className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Name</h4>
                  <p className="text-lg font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Email</h4>
                  <p className="text-lg font-medium">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Location</h4>
                  <p className="text-lg font-medium">New York, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <Calendar className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Experience</h4>
                  <p className="text-lg font-medium">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
