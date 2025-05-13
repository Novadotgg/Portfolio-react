
import React, { useState } from 'react';
import { ExternalLink, Github, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    // image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    image:pic,
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
  // {
  //   id: 4,
  //   title: "Fitness Tracking Mobile App",
  //   description: "A mobile application to track workouts, set goals, and analyze progress with charts and statistics.",
  //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  //   tags: ["React Native", "Redux", "Firebase", "Expo"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   category: "mobile"
  // },
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
    githubUrl: "#",
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
    tags: ["Blockchain", "Solidity","Ganache","Ethereum"],
    githubUrl: "https://github.com/Novadotgg/CRN-using-Blockchain",
    liveUrl: "#",
    category: "security"
  },
  {
    id: 10,
    title: "X sentiment analysis",
    description: "Use basic NLP for sentiment analysis of tweets from X",
    image: twe,
    tags: ["NLP","ML","Regression","Tf-Idf"],
    githubUrl: "https://github.com/Novadotgg/Sentiment",
    liveUrl: "#",
    category: "design"
  }
];

const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across different platforms.
          </p>
        </div>
        
        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="bg-secondary">
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Android</TabsTrigger>
              <TabsTrigger value="design">ML & AI</TabsTrigger>
              <TabsTrigger value="security">Blockchain</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                className={viewMode === 'grid' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('list')}
                aria-label="List view"
                className={viewMode === 'list' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <TabsContent value="web">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'web').map((project) => (
                  <GridProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projects.filter(p => p.category === 'web').map((project) => (
                  <ListProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="mobile">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'mobile').map((project) => (
                  <GridProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projects.filter(p => p.category === 'mobile').map((project) => (
                  <ListProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="design">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'design').map((project) => (
                  <GridProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projects.filter(p => p.category === 'design').map((project) => (
                  <ListProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="security">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'security').map((project) => (
                  <GridProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projects.filter(p => p.category === 'security').map((project) => (
                  <ListProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

const GridProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary/50 rounded-lg overflow-hidden border border-muted shadow-md card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-emerald-400/20 text-emerald-400 text-xs rounded-full">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> Code
            </a>
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> View
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ListProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary/50 rounded-lg border border-muted shadow-md p-6 card-hover">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <div className="h-48 rounded-md overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="lg:w-3/4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-emerald-400/20 text-emerald-400 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> View Code
              </a>
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
