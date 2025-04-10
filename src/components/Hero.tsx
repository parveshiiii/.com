
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-in">
          <p className="text-primary font-medium mb-4">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Name
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
