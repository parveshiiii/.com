
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
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500',
      link: 'https://xenarcai.onrender.com/',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    },
    {
      id: '2',
      title: 'Xenith_mini',
      description: 'Coming soon! A lightweight version of our emotional intelligence framework designed for edge devices and low-resource environments.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500',
      link: '#',
      technologies: ['PyTorch', 'BERT', 'Edge Computing'],
    },
    {
      id: '3',
      title: 'Empathy Model',
      description: 'An open-source implementation of our research on computational empathy modeling for more human-centered AI interactions.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500',
      link: '#',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Research'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A showcase of my recent work in AI and machine learning. Each project represents a step forward in emotional intelligence and human-centered computing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-card">
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
                  href="https://github.com/XenArcAI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <Github className="mr-1 h-4 w-4" /> Repository
                </a>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Join XenArcAI</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We're looking for talented individuals passionate about AI and emotional intelligence to join our team.
          </p>
          <Button size="lg" asChild>
            <a 
              href="https://github.com/XenArcAI" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
