
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
  Link
} from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level }) => {
  return (
    <div className="bg-secondary/50 p-4 rounded-lg border border-muted shadow-md card-hover">
      <div className="text-center mb-3">
        <div className="inline-block p-3 bg-emerald-400/20 rounded-full mb-3">
          <span className="text-emerald-400">
            {icon}
          </span>
        </div>
        <h3 className="text-base font-semibold">{name}</h3>
      </div>
      <div className="mt-3">
        <div className="text-xs text-muted-foreground mb-1 flex justify-between">
          <span>Proficiency</span>
          <span>{level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-1.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const programmingLanguages = [
    { name: 'C', icon: <Code size={18} />, level: 70 },
    { name: 'C++', icon: <Code size={18} />, level: 85 },
    { name: 'Python', icon: <Code size={18} />, level: 90 },
    { name: 'Java', icon: <Code size={18} />, level: 40 },
    // { name: 'PHP', icon: <Code size={18} />, level: 60 },
  ];

  const webTechnologies = [
    { name: 'HTML', icon: <FileCode size={18} />, level: 95 },
    { name: 'CSS', icon: <FileCode size={18} />, level: 85 },
    { name: 'JavaScript', icon: <FileCode size={18} />, level: 60 },
    { name: 'Django', icon: <FileCode size={18} />, level: 75 },
    { name: 'React', icon: <FileCode size={18} />, level: 50 },
    { name: 'Fast API', icon: <FileCode size={18} />, level: 70 },
    { name: 'Flask', icon: <FileCode size={18} />, level: 65 },
  ];

  const mobileDevelopment = [
    { name: 'React Native', icon: <Smartphone size={18} />, level: 60 },
    { name: 'Java', icon: <Smartphone size={18} />, level: 45 },
    { name: 'Kotlin', icon: <Smartphone size={18} />, level: 35 },
  ];

  const databases = [
    { name: 'Firebase', icon: <Database size={18} />, level: 80 },
    { name: 'MySQL', icon: <Database size={18} />, level: 90 },
    { name: 'PostgreSQL', icon: <Database size={18} />, level: 90 }
  ];

  const aiAndML = [
    { name: 'ML Algorithms', icon: <Brain size={18} />, level: 85 },
    { name: 'Deep Learning', icon: <Brain size={18} />, level: 50 },
    { name: 'NLP', icon: <Brain size={18} />, level: 75 },
    { name: 'Transformers', icon: <Brain size={18} />, level: 75 },
    { name: 'Language Models', icon: <Brain size={18} />, level: 75 },
  ];

  const operatingSystems = [
    { name: 'Windows', icon: <Monitor size={18} />, level: 95 },
    { name: 'Linux (Ubuntu)', icon: <Monitor size={18} />, level: 80 },
  ];

  const toolsAndPlatforms = [
    { name: 'Git', icon: <GitBranch size={18} />, level: 85 },
    { name: 'Docker', icon: <Wrench size={18} />, level: 70 },
    { name: 'Colab', icon: <Wrench size={18} />, level: 90 },
    { name: 'Hugging Face', icon: <Wrench size={18} />, level: 75 },
    { name: 'Kaggle', icon: <Wrench size={18} />, level: 80 },
    { name: 'Langchain', icon: <Wrench size={18} />, level: 65 },
    { name: 'Langgraph', icon: <Wrench size={18} />, level: 65 },
    { name: 'Langsmith', icon: <Wrench size={18} />, level: 65 },
    { name: 'RAG', icon: <Wrench size={18} />, level: 60 },
    { name: 'Ganache', icon: <Wrench size={18} />, level: 80 },
    // { name: 'VS code', icon: <Wrench size={18} />, level: 80 },
  ];

  const otherSkills = [
    { name: 'DS & Algorithms', icon: <Layers size={18} />, level: 65 },
    { name: 'Blockchain', icon: <Link size={18} />, level: 50 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-gradient">Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Programming Languages</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {programmingLanguages.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Web Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {webTechnologies.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Mobile Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {mobileDevelopment.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Databases</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {databases.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Machine Learning & AI</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {aiAndML.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Operating Systems</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {operatingSystems.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Tools & Platforms</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {toolsAndPlatforms.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Other Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
