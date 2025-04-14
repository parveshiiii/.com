
import { ArrowRight, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-between pt-16 section-padding relative">
      <div className="container mx-auto px-4 flex-grow flex items-center">
        <div className="max-w-3xl animate-in">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-24 w-24 border-2 border-primary animate-in animate-float animate-glow">
              <AvatarImage src="/lovable-uploads/0d3d46aa-bc6c-4610-a290-06aa1e6a8174.png" alt="Parvesh Rawal" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="animate-in animate-delayed">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                Parvesh Rawal
              </h1>
              <p className="text-muted-foreground">Founder & CEO of XenArcAI | AI & ML Visionary</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6 animate-in" style={{animationDelay: "150ms"}}>
            I create intelligent systems that understand human emotions.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-in" style={{animationDelay: "200ms"}}>
            Specialist in empathy modeling, emotion recognition, and sentiment analysis. Building the future of 
            human-centered AI at XenArcAI.
          </p>
          <div className="flex flex-wrap gap-4 animate-in" style={{animationDelay: "250ms"}}>
            <Button size="lg" className="group animate-pulse-slow">
              <a href="#projects" className="flex items-center">
                Explore My Work 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover:border-primary">
              <a href="#join-us" className="flex items-center">Join XenArcAI</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Earth Logo with Branding */}
      <div className="w-full relative mt-12 mb-4">
        <div className="flex justify-center items-center mb-2">
          <img 
            src="/lovable-uploads/55ffd771-7cdb-4ab6-bc2e-cd3a05cd67a5.png" 
            alt="XenArcAI Earth" 
            className="w-full max-w-3xl mx-auto"
          />
        </div>
        
        {/* Grok-style branding at the bottom */}
        <div className="absolute bottom-0 right-5 md:right-12 flex items-center gap-2 text-primary animate-pulse-slow">
          <span className="font-medium">Powered by</span>
          <div className="flex items-center">
            <span className="font-bold">XenArcAI</span>
            <Zap className="h-5 w-5 ml-1 text-primary animate-glow" />
          </div>
        </div>
      </div>
      
      {/* Global lighting effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-primary/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
