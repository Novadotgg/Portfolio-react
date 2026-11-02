import React from 'react';
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main id="main-content">
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
