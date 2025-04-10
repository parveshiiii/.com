
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import GitHubProjects from '@/components/GitHubProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <About />
      <GitHubProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
