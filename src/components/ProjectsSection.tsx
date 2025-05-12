
import React, { useState } from 'react';
import { ExternalLink, Github, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'design';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB, featuring product listings, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that shows forecasts for multiple locations with interactive charts and maps.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Chart.js", "OpenWeatherAPI", "Styled Components"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description: "A mobile application to track workouts, set goals, and analyze progress with charts and statistics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    githubUrl: "#",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A social media application with features like posting, commenting, liking, and user profiles.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A mobile app for finding recipes based on available ingredients with favorites and shopping list features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React Native", "Context API", "RESTful API", "Async Storage"],
    githubUrl: "#",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 7,
    title: "E-learning Platform UI",
    description: "A comprehensive UI design for an e-learning platform with course listings, video players, and user dashboard.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Figma", "Adobe XD", "UI/UX", "Prototype"],
    githubUrl: "#",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 8,
    title: "Banking App UI Design",
    description: "A modern UI design for a banking application with account management, transfers, and analytics.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Figma", "Wireframing", "Prototyping", "UI Kit"],
    githubUrl: "#",
    liveUrl: "#",
    category: "design"
  },
  {
    id: 9,
    title: "Travel Booking UI",
    description: "A UI design for a travel booking platform with search, booking flow, and user account features.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Adobe XD", "Photoshop", "Illustrator", "User Testing"],
    githubUrl: "#",
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
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
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
