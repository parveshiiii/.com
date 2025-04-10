
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const aiSkills = [
    'Empathy Modeling', 'Emotion Recognition', 
    'Sentiment Analysis', 'Emotional Intelligence'
  ];

  const techSkills = [
    'TensorFlow', 'PyTorch', 'BERT', 'GPT',
    'Python', 'Docker', 'Kubernetes', 'AWS'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Parvesh Rawal, an AI and Machine Learning enthusiast passionate about creating
                intelligent systems that understand human emotions and behavior.
              </p>
              <p>
                As the founder of XenArcAI, I'm dedicated to developing innovative AI solutions that bridge
                the gap between technology and human experience. My focus lies in empathy modeling,
                emotion recognition, and sentiment analysis.
              </p>
              <p>
                When I'm not exploring neural networks or fine-tuning algorithms, I'm collaborating with
                like-minded innovators to push the boundaries of artificial intelligence.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Organizations</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/IntellijMind" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  @IntellijMind
                </a>
                <a href="https://github.com/Alphalabs-ai" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  @Alphalabs-ai
                </a>
                <a href="https://github.com/XenArcAI" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                  @XenArcAI
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-6">My Expertise</h3>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-3">🌟 Core AI Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {aiSkills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-3">🖥️ Technical Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {techSkills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h4 className="text-xl font-bold mb-4">Current Focus</h4>
              <p className="text-muted-foreground">
                Currently exploring advanced algorithms and deep learning techniques 
                for human-centered AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
