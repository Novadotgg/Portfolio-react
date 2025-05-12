
import React from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level }) => {
  return (
    <div className="bg-secondary/50 p-6 rounded-lg border border-muted shadow-md card-hover">
      <div className="text-center mb-4">
        <div className="inline-block p-4 bg-emerald-400/20 rounded-full mb-4">
          <span className="text-3xl" role="img" aria-label={name}>
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="mt-4">
        <div className="text-sm text-muted-foreground mb-2 flex justify-between">
          <span>Proficiency</span>
          <span>{level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const frontendSkills = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'TypeScript', icon: '📝', level: 85 },
    { name: 'HTML5/CSS3', icon: '🎨', level: 95 },
    { name: 'Tailwind CSS', icon: '🌬️', level: 92 },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'Express', icon: '🚂', level: 75 },
    { name: 'MongoDB', icon: '🍃', level: 70 },
    { name: 'PostgreSQL', icon: '🐘', level: 65 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', icon: '🔄', level: 88 },
    { name: 'UI/UX Design', icon: '🎭', level: 75 },
    { name: 'DevOps', icon: '🚀', level: 60 },
    { name: 'Testing', icon: '🧪', level: 70 },
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

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-medium mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
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
            <h3 className="text-xl font-medium mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
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
            <h3 className="text-xl font-medium mb-6 text-center">Other Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSkills.map((skill, index) => (
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
