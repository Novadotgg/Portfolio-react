
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-gradient mb-2">Portfolio</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Building stunning digital experiences with modern web technologies.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="#" 
            className="p-2 rounded-full bg-background hover:bg-emerald-400/20 transition-colors"
            aria-label="Github"
          >
            <Github className="h-5 w-5 text-foreground hover:text-emerald-400" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-background hover:bg-emerald-400/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-foreground hover:text-emerald-400" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-background hover:bg-emerald-400/20 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-foreground hover:text-emerald-400" />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-background hover:bg-emerald-400/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-foreground hover:text-emerald-400" />
          </a>
        </div>
        
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-emerald-400">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
