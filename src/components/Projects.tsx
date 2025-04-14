import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'XenArcAI Platform',
      description: 'An advanced AI platform focusing on emotion recognition and sentiment analysis, with a responsive interface built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&h=500',
      link: 'https://xenarcai.onrender.com/',
      github: 'https://github.com/XenArcAI/xenarcai-platform',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    },
    {
      id: '2',
      title: 'Xenith_mini',
      description: 'Coming soon! A lightweight version of our emotional intelligence framework designed for edge devices and low-resource environments.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500',
      link: 'https://github.com/XenArcAI',
      github: 'https://github.com/XenArcAI/xenith-mini',
      technologies: ['PyTorch', 'Edge Computing'],
    },
    {
      id: '3',
      title: 'Empathy Model',
      description: 'An open-source implementation of our research on computational empathy modeling for more human-centered AI interactions.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500',
      link: 'https://github.com/XenArcAI/empathy-model',
      github: 'https://github.com/XenArcAI/empathy-model',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Research'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 animate-in">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl animate-in" style={{animationDelay: "50ms"}}>
          A showcase of my innovations in AI and machine learning. Each project represents a milestone in advancing 
          emotional intelligence and human-centered computing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-card animate-in"
              style={{animationDelay: `${i * 100 + 100}ms`}}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:underline group"
                >
                  <Github className="mr-1 h-4 w-4 transition-transform group-hover:-translate-y-1" /> Repository
                </a>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:underline group"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-in" style={{animationDelay: "400ms"}}>
          <h3 className="text-xl font-bold mb-4">Innovating at XenArcAI</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            I founded XenArcAI to revolutionize how machines understand human emotions. 
            Join me on this journey to create more empathetic AI.
          </p>
          <a href="#join-us" className="scroll-smooth">
            <Button size="lg" className="group">
              Join Us <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
