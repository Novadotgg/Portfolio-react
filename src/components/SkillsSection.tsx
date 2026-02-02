import React from 'react';
import {
  Code,
  FileCode,
  Smartphone,
  Database,
  Brain,
  Monitor,
  GitBranch,
  Wrench,
  Layers,
  Link,
  ChevronRight
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, index }) => {
  return (
    <div
      className="group animate-slide-in relative"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative bg-secondary/30 backdrop-blur-lg p-4 rounded-2xl border border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/10 hover:-translate-y-1 will-change-transform">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors shrink-0">
            <span className="text-emerald-400 group-hover:scale-110 transition-transform inline-block">
              {React.cloneElement(icon as React.ReactElement, { size: 18 })}
            </span>
          </div>
          <h3
            className="text-sm font-bold tracking-tight text-foreground/90 group-hover:text-emerald-400 transition-colors truncate"
            title={name}
          >
            {name}
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
            <span>Proficiency</span>
            <span className="text-emerald-500/80">{level}%</span>
          </div>
          <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, startIndex }: { title: string, skills: any[], startIndex: number }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <div className="h-8 w-1 bg-emerald-500 rounded-full" />
      <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
        {title}
        <Badge variant="outline" className="text-[10px] opacity-50 border-white/10 uppercase">
          {skills.length} Items
        </Badge>
      </h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, idx) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
          index={startIndex + idx}
        />
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const programmingLanguages = [
    { name: 'C', icon: <Code />, level: 70 },
    { name: 'C++', icon: <Code />, level: 85 },
    { name: 'Python', icon: <Code />, level: 90 },
    { name: 'Java', icon: <Code />, level: 40 },
  ];

  const webTechnologies = [
    { name: 'HTML', icon: <FileCode />, level: 95 },
    { name: 'CSS', icon: <FileCode />, level: 85 },
    { name: 'JavaScript', icon: <FileCode />, level: 60 },
    { name: 'Django', icon: <FileCode />, level: 75 },
    { name: 'React', icon: <FileCode />, level: 50 },
    { name: 'Fast API', icon: <FileCode />, level: 70 },
    { name: 'Flask', icon: <FileCode />, level: 65 },
  ];

  const mobileDevelopment = [
    { name: 'React Native', icon: <Smartphone />, level: 60 },
    { name: 'Java', icon: <Smartphone />, level: 45 },
    { name: 'Kotlin', icon: <Smartphone />, level: 35 },
  ];

  const databases = [
    { name: 'Firebase', icon: <Database />, level: 80 },
    { name: 'MySQL', icon: <Database />, level: 90 },
    { name: 'PostgreSQL', icon: <Database />, level: 90 }
  ];

  const aiAndML = [
    { name: 'ML Algorithms', icon: <Brain />, level: 85 },
    { name: 'Deep Learning', icon: <Brain />, level: 50 },
    { name: 'NLP', icon: <Brain />, level: 75 },
    { name: 'Transformers', icon: <Brain />, level: 75 },
    { name: 'Language Models', icon: <Brain />, level: 75 },
  ];

  const toolsAndPlatforms = [
    { name: 'Git', icon: <GitBranch />, level: 85 },
    { name: 'Docker', icon: <Wrench />, level: 70 },
    { name: 'Colab', icon: <Wrench />, level: 90 },
    { name: 'Hugging Face', icon: <Wrench />, level: 75 },
    { name: 'Kaggle', icon: <Wrench />, level: 80 },
    { name: 'Langchain', icon: <Wrench />, level: 65 },
    { name: 'Langgraph', icon: <Wrench />, level: 65 },
    { name: 'Langsmith', icon: <Wrench />, level: 65 },
    { name: 'RAG', icon: <Wrench />, level: 60 },
    { name: 'Ganache', icon: <Wrench />, level: 80 },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technological toolkit and proficiency across multiple domains.
          </p>
        </div>

        <div className="space-y-20">
          <SkillCategory title="Programming Languages" skills={programmingLanguages} startIndex={0} />
          <SkillCategory title="Web Technologies" skills={webTechnologies} startIndex={4} />
          <SkillCategory title="Machine Learning & AI" skills={aiAndML} startIndex={11} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <SkillCategory title="Databases" skills={databases} startIndex={16} />
            <SkillCategory title="Mobile Development" skills={mobileDevelopment} startIndex={19} />
          </div>

          <SkillCategory title="Tools & Platforms" skills={toolsAndPlatforms} startIndex={22} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
