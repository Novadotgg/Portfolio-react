import { Briefcase, Rocket, GraduationCap, FlaskConical, Smartphone, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const parseStartDate = (duration: string): Date => {
  const startPart = duration.split("-")[0].trim();
  return new Date(`${startPart} 1`);
};

const experiences = [
  {
    company: "F-Ai",
    role: "Founding Engineer",
    duration: "January 2026",
    location: "Bangalore, India",
    category: "Founding",
    description:
      "Implemented the whole product design to building the internal architeture to make a better revenue source, the whole frontend to backend to integrations and deploying it in cloud and managed team of 5-10 people",
  },
  {
    company: "F-Ai",
    role: "(ML/AI) R & D Engineer",
    duration: "September 2025",
    location: "Bangalore, India",
    category: "R&D",
    description: "Started building the whole product from scratch",
  },
  {
    company: "F-Ai",
    role: "(ML/AI) R & D Engineer intern",
    duration: "June 2025",
    location: "Bangalore, India",
    category: "R&D",
    description:
      "Started with simple tasks and gradually moved to complex tasks, worked on classical ML to transformers and LLMs.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DSA",
    duration: "Jan 2025 - May 2025",
    location: "Trichy, Tamil Nadu, India",
    category: "Teaching",
    description: "Assisted professors in delivering Data Structures & Algorithms.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DBMS",
    duration: "Aug 2024 - May 2025",
    location: "Trichy, Tamil Nadu, India",
    category: "Teaching",
    description: "Helped facilitate DBMS coursework and labs.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DSA",
    duration: "Jan 2024 - May 2024",
    location: "Trichy, Tamil Nadu, India",
    category: "Teaching",
    description: "Guided students through DSA concepts and problem-solving.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - Programming Paradigms",
    duration: "Aug 2023 - Dec 2023",
    location: "Trichy, Tamil Nadu, India",
    category: "Teaching",
    description:
      "Supported professors in teaching Programming Paradigms with hands-on sessions.",
  },
  {
    company: "Tripura University",
    role: "Research Intern",
    duration: "June 2022 - July 2022",
    location: "Tripura, India",
    category: "Research",
    description:
      "Proposed a blockchain-based vehicle anti-theft system for smart cities.",
  },
  {
    company: "The Entrepreneurship Network",
    role: "Android Developer Associate",
    duration: "March 2022 - April 2022",
    location: "Delhi, India",
    category: "Android",
    description:
      "Built Android apps focusing on both UI/UX and backend development.",
  },
];

experiences.sort((a, b) => parseStartDate(b.duration).getTime() - parseStartDate(a.duration).getTime());

const getIcon = (category: string) => {
  switch (category) {
    case "Founding": return <Rocket className="h-5 w-5" />;
    case "Teaching": return <GraduationCap className="h-5 w-5" />;
    case "R&D": return <FlaskConical className="h-5 w-5" />;
    case "Research": return <FlaskConical className="h-5 w-5" />;
    case "Android": return <Smartphone className="h-5 w-5" />;
    default: return <Briefcase className="h-5 w-5" />;
  }
};

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-dashed border-emerald-500/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Connector Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-10 h-10 bg-background border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] z-20 overflow-hidden group-hover:scale-110 transition-transform">
                  <div className="text-emerald-400">
                    {getIcon(exp.category)}
                  </div>
                </div>

                <div className="group relative">
                  {/* Card Glow Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-800/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                  <Card className="relative bg-secondary/30 backdrop-blur-lg border border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl will-change-transform">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                              {exp.role}
                            </h3>
                            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-none hover:bg-emerald-500/20">
                              {exp.category}
                            </Badge>
                          </div>
                          <p className="text-lg font-semibold text-emerald-500/80 flex items-center gap-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground whitespace-nowrap">
                          <span className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
