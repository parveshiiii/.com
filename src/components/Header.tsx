
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Download } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary flex items-center gap-2 animate-in">
          <span className="text-2xl">🧠</span> Parvesh Rawal
        </a>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden animate-in" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 animate-in">
          {navItems.map((item, i) => (
            <a 
              key={item.label} 
              href={item.href}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="group">
            <a 
              href="https://drive.google.com/uc?export=download&id=YOURFILEID" 
              download="Parvesh_Rawal_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md md:hidden animate-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full flex items-center justify-center gap-2 group">
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
