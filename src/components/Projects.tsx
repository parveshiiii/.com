
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/lib/types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Project One',
      description: 'A responsive web application built with React and Tailwind CSS. This project demonstrates my frontend skills and attention to design details.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500',
      link: '#',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'A full-stack application with authentication, database integration and real-time features.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500',
      link: '#',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'An e-commerce platform with payment processing, cart functionality, and user accounts.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500',
      link: '#',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A collection of some of my recent work. Each project represents a unique challenge and solution.
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
                  href="#" 
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <Github className="mr-1 h-4 w-4" /> Source Code
                </a>
                <a 
                  href={project.link} 
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a 
            href="#github" 
            className="text-primary font-medium hover:underline"
          >
            Check out my GitHub repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
