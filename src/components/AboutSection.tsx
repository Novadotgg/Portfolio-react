import React from 'react';
import { User, Mail, MapPin, Calendar, Code2, Brain, Database, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    { icon: <Code2 className="h-4 w-4" />, label: "DSA Expert" },
    { icon: <Brain className="h-4 w-4" />, label: "ML & NLP" },
    { icon: <Globe className="h-4 w-4" />, label: "Full Stack" },
    { icon: <Database className="h-4 w-4" />, label: "Blockchain" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a passionate Computer Science Engineer dedicated to building innovative solutions at the intersection of software and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="h-8 w-1 bg-emerald-500 rounded-full inline-block" />
                Who I Am
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a <span className="text-emerald-400 font-semibold">Computer Science Engineer</span> with an M.Tech background, specializing in high-impact technologies. My journey is fueled by a deep curiosity for how complex systems work and a drive to simplify them using technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 py-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-emerald-500/20 rounded-full hover:border-emerald-500/50 transition-colors group cursor-default"
                >
                  <span className="text-emerald-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                With expertise spanning <span className="text-foreground font-medium">Data Structures, Machine Learning, and Blockchain</span>, I enjoy solving real-world challenges. Whether it's architecting a robust full-stack application or fine-tuning an NLP model, I focus on performance and scalability.
              </p>
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-secondary/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 will-change-transform">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <User className="h-6 w-6 text-emerald-400" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <InfoItem icon={<Mail />} label="Email" value="sayandas02001@gmail.com" />
                  <InfoItem icon={<MapPin />} label="Location" value="India" />
                  <InfoItem icon={<Calendar />} label="Qualification" value="M.Tech (CSE)" />
                  <InfoItem icon={<Brain />} label="Focus" value="AI & ML" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-4 group/item">
    <div className="p-3 bg-emerald-400/10 rounded-xl group-hover/item:bg-emerald-400/20 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 text-emerald-400" })}
    </div>
    <div>
      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</h4>
      <p className="text-sm font-semibold text-foreground truncate max-w-[180px]">{value}</p>
    </div>
  </div>
);

export default AboutSection;
