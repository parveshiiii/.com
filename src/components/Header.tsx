
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Users, Zap } from 'lucide-react';

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
    { label: 'Join Us', href: '#join-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-300 bg-clip-text text-transparent flex items-center gap-2 animate-in">
          <Zap className="h-6 w-6 text-yellow-400 animate-pulse-slow" /> Parvesh Rawal
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
              className={`font-medium hover:text-yellow-400 transition-colors ${
                item.label === 'Join Us' ? 'text-yellow-400' : 'text-muted-foreground'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 flex items-center gap-2">
              <Users className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Contact Me
            </Button>
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md md:hidden animate-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className={`font-medium transition-colors ${
                    item.label === 'Join Us' ? 'text-yellow-400' : 'text-muted-foreground'
                  } hover:text-yellow-400`}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="w-full" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 flex items-center justify-center gap-2 group">
                  <Users className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Contact Me
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
