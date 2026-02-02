import React, { useState } from 'react';
import { ExternalLink, Github, Grid, List, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from "@/components/ui/badge";

import pic from '../pics/Todo.jpg';
import url from '../pics/url.jpg';
import ev from '../pics/evergreen.png';
import mlmp from '../pics/mlimp.jpg';
import mov from '../pics/movime.jpg';
import cr from '../pics/cropiee.jpg';
import bc from '../pics/bchaain.jpg';
import nnet from '../pics/nn.jpg';
import aci from '../pics/aqi.jpg';
import twe from '../pics/tweet.jpg';
import ghub from '../pics/ghub.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'design' | 'security';
}

const projects: Project[] = [
  {
    id: 1,
    title: "To-do list",
    description: "Created a to-do list to store todos', marking their priorities, cutting them once completed and deleting the todos'",
    image: pic,
    tags: ["Python", "django", "HTML", "CSS"],
    githubUrl: "https://github.com/Novadotgg/to-do-list",
    liveUrl: "https://to-do-list-sayan.netlify.app/",
    category: "web"
  },
  {
    id: 2,
    title: "URL Shortener",
    description: "Created a predefined size alphanumeric URL from the original URL using LAMP stack.",
    image: url,
    tags: ["PHP", "HTML", "MySQL", "Apache", "htaccess", "Linux"],
    githubUrl: "https://github.com/Novadotgg/URL-shortener",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 3,
    title: "Evergreen",
    description: "This is a project based on reclycling and donations where people can join us as donors and can donate old and used books papers, newspapers etc to recycle and reuse those used papers to form a ueful product.",
    image: ev,
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    githubUrl: "https://github.com/Novadotgg/Evergreen",
    liveUrl: "https://evrgrin.netlify.app/",
    category: "web"
  },
  {
    id: 4,
    title: "MLIMP",
    description: "App with Machine Learning applications consiting of 5 different use cases of Machine Learning.",
    image: mlmp,
    tags: ["Java", "XML", "Kotlin"],
    githubUrl: "https://github.com/Novadotgg/Mlimp",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 5,
    title: "Movime",
    description: "Simple app with movies and anime sites",
    image: mov,
    tags: ["XML"],
    githubUrl: "https://github.com/Novadotgg/Movime",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 6,
    title: "Cropiee",
    description: "Chatbot that assisits farmers with crops, their prices, soil conditions, etc",
    image: cr,
    tags: ["ML", "NLP", "Flask", "Python"],
    githubUrl: "#",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 7,
    title: "Mini LLM",
    description: "LLM using RAG to answer from the pdf provided",
    image: nnet,
    tags: ["RAG", "Langchain", "Python", "Flask"],
    githubUrl: "https://github.com/Novadotgg/Mini-llm",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 8,
    title: "AQI classification",
    description: "ML models to predict AQI buckets based on the index.",
    image: aci,
    tags: ["ML", "DL"],
    githubUrl: "https://github.com/Novadotgg/AQI",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 9,
    title: "Securing  CRN using Blockchain",
    description: "Used Blockchain to secure CRN from SSDF attacks.",
    image: bc,
    tags: ["Blockchain", "Solidity", "Ganache", "Ethereum"],
    githubUrl: "https://github.com/Novadotgg/CRN-using-Blockchain",
    liveUrl: "#",
    category: "security"
  },
  {
    id: 10,
    title: "X sentiment analysis",
    description: "Use basic NLP for sentiment analysis of tweets from X",
    image: twe,
    tags: ["NLP", "ML", "Regression", "Tf-Idf"],
    githubUrl: "https://github.com/Novadotgg/Sentiment",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 11,
    title: "Gacker",
    description: "Built a Gaming hub for 7 different basic games using AI'",
    image: ghub,
    tags: ["React", "Tailwind CSS", "Typescript", "shadcn-ui"],
    githubUrl: "https://github.com/Novadotgg/Gacker",
    liveUrl: "https://gacker.vercel.app/",
    category: "web"
  },
];

const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section id="projects" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Background elements moved to top for proper layering */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A curated showcase of my engineering journey across different technologies and platforms.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <TabsList className="bg-secondary/50 backdrop-blur-md p-1 border border-white/5 rounded-2xl h-auto">
              {['web', 'mobile', 'design', 'security'].map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-6 py-2.5 rounded-xl data-[state=active]:bg-emerald-500 data-[state=active]:text-white transition-all duration-300"
                >
                  {cat === 'web' ? 'Web' : cat === 'mobile' ? 'Android' : cat === 'design' ? 'ML & AI' : 'Blockchain'}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex bg-secondary/50 backdrop-blur-md p-1 border border-white/5 rounded-2xl">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('grid')}
                className={`w-10 h-10 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-emerald-500 text-white shadow-lg' : 'hover:bg-white/5 text-muted-foreground'}`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('list')}
                className={`w-10 h-10 rounded-xl transition-all ${viewMode === 'list' ? 'bg-emerald-500 text-white shadow-lg' : 'hover:bg-white/5 text-muted-foreground'}`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {['web', 'mobile', 'design', 'security'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className={viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-8 max-w-5xl mx-auto"
              }>
                {projects.filter(p => p.category === category).map((project, idx) => (
                  viewMode === 'grid'
                    ? <GridProjectCard key={project.id} project={project} index={idx} />
                    : <ListProjectCard key={project.id} project={project} index={idx} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const GridProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  return (
    <div
      className="group bg-secondary/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/5 hover:bg-secondary/40 transition-all duration-500 animate-slide-in shadow-xl hover:-translate-y-2 will-change-transform"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-7 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3 tracking-tight transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-400/80 text-[10px] uppercase tracking-wider font-bold">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild className="flex-1 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all h-11">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> Code
            </a>
          </Button>
          <Button size="sm" asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-xl h-11 shadow-lg shadow-emerald-900/20">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> View
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ListProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  return (
    <div
      className="group bg-secondary/30 backdrop-blur-lg rounded-3xl border border-white/5 hover:bg-secondary/40 transition-all duration-500 p-8 animate-slide-in shadow-xl will-change-transform"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="h-56 rounded-2xl overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-3 tracking-tight transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-400/80 text-[10px] uppercase tracking-wider font-bold">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 max-w-md">
            <Button variant="outline" asChild className="flex-1 rounded-xl h-12 border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-base">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-3" /> Source Code
              </a>
            </Button>
            <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 rounded-xl h-12 shadow-lg shadow-emerald-900/20 text-base">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-3" /> Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
