
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import GitHubProjects from '@/components/GitHubProjects';
import JoinUs from '@/components/JoinUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NeuralNetwork from '@/components/NeuralNetwork';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NeuralNetwork />
      <Header />
      <Hero />
      <Projects />
      <About />
      <GitHubProjects />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
