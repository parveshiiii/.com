
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-between pt-16 section-padding relative">
      <div className="container mx-auto px-4 flex-grow flex items-center">
        <div className="max-w-3xl animate-in">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-24 w-24 border-2 border-primary animate-in animate-float animate-glow">
              <AvatarImage src="/lovable-uploads/f46f9bf1-7543-401e-94d4-a75fa231ff0a.png" alt="Parvesh Rawal" />
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
      
      {/* XenArcAI Dynamic Branding */}
      <div className="w-full relative mt-12 mb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-8xl md:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-purple-400 mb-4 animate-pulse-slow">
            XenArcAI
          </div>
          
          {/* Particle effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '10%', left: '20%', animationDelay: '0.5s' }}></div>
              <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '30%', left: '80%', animationDelay: '1.2s' }}></div>
              <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '70%', left: '10%', animationDelay: '0.8s' }}></div>
              <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '60%', left: '75%', animationDelay: '1.7s' }}></div>
              <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '40%', left: '40%', animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Grok-style branding at the bottom */}
        <div className="absolute bottom-0 right-5 md:right-12 flex items-center gap-2 text-primary animate-pulse-slow">
          <span className="font-medium">Powered by</span>
          <div className="flex items-center">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">XenArcAI</span>
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
