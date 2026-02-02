import React from 'react';
import { GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  icon: React.ReactNode;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, grade, icon, index }) => {
  return (
    <div
      className="relative group animate-slide-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Decorative Blur Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-800/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

      <Card className="relative bg-secondary/30 backdrop-blur-lg border border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl will-change-transform">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors shrink-0">
              {React.cloneElement(icon as React.ReactElement, { size: 32, className: "text-emerald-400" })}
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors mb-1">
                    {degree}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                    <School className="h-4 w-4 text-emerald-500/60" />
                    {institution}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-none px-3 py-1 text-sm font-semibold">
                    <Award className="h-3 w-3 mr-1" />
                    {grade}
                  </Badge>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Calendar className="h-4 w-4" />
                    {period}
                  </span>
                </div>
              </div>

              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500/30 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const educationHistory = [
    {
      degree: "M.Tech, Computer Science & Engineering",
      institution: "IIIT Trichy",
      period: "2023 – 2025",
      grade: "CGPA: 8.5/10",
      icon: <GraduationCap />
    },
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "NERIST",
      period: "2019 – 2023",
      grade: "CGPA: 8.52/10",
      icon: <GraduationCap />
    },
    {
      degree: "XII (Class 12 Equivalent)",
      institution: "NERIST",
      period: "2017 – 2019",
      grade: "CGPA: 8.61/10",
      icon: <BookOpen />
    },
    {
      degree: "X (High School)",
      institution: "Don Bosco School",
      period: "2017",
      grade: "CGPA: 10/10",
      icon: <School />
    }
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            My academic journey has been a foundation for my passion for computer science and engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationHistory.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              grade={item.grade}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
