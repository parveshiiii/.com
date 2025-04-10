
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-in">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-24 w-24 border-2 border-primary">
              <AvatarImage src="https://avatars.githubusercontent.com/u/parveshiiii" alt="Parvesh Rawal" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Parvesh Rawal
              </h1>
              <p className="text-muted-foreground">Founder of XenArcAI | AI & ML Enthusiast</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
            I build intelligent systems powered by AI.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Enthusiast in AI, Machine Learning, and Deep Learning. Currently exploring advanced coding 
            and algorithm design with a focus on empathy modeling and emotional intelligence.
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
