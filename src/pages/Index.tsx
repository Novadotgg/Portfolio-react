
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import WorkExperienceSection from "@/components/WorkExperienceSection";
import PublishedPapersSection from "@/components/PublishedPapersSection";
import CursorGlow from '@/components/CursorGlow';
import SectionDivider from '@/components/SectionDivider';

import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page Loader */}
      <div className={`page-loader ${!loading ? 'loaded' : ''}`}>
        <div className="page-loader-ring" />
      </div>

      <div className="min-h-screen bg-background text-foreground">
        <CursorGlow />
        <Navbar />
        <HeroSection />
        <SectionDivider variant="wave" />
        <AboutSection />
        <SectionDivider variant="dots" />
        <WorkExperienceSection />
        <SectionDivider variant="wave" flip />
        <EducationSection />
        <SectionDivider variant="dots" />
        <SkillsSection />
        <SectionDivider variant="wave" />
        <PublishedPapersSection />
        <SectionDivider variant="dots" />
        <ProjectsSection />
        <SectionDivider variant="wave" flip />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
