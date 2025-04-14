
import { Github, Linkedin, Twitter, Mail, Phone, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/parveshiiii', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/parvesh-rawal-249909353/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://twitter.com/parvesh_rawal01', 
      label: 'Twitter' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:pr086832@gmail.com', 
      label: 'Email' 
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: 'tel:+918950466775',
      label: 'Phone'
    }
  ];

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center animate-in">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Founder & CEO of <a href="https://xenarcai.onrender.com/" className="text-primary hover:underline">XenArcAI</a> | AI & ML Visionary 
            </p>
            <p>
              &copy; {currentYear} Parvesh Rawal. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Contact: <a href="mailto:pr086832@gmail.com" className="text-primary hover:underline">pr086832@gmail.com</a> | <a href="tel:+918950466775" className="text-primary hover:underline">+91 8950466775</a>
            </p>
          </div>
          
          {/* XenArcAI dynamic branding */}
          <div className="mt-8 mb-2 relative">
            <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary/80 to-purple-400 bg-clip-text text-transparent animate-pulse-slow">
              XenArcAI
            </div>
            <div className="absolute -top-4 -right-4">
              <Zap className="h-6 w-6 text-primary animate-glow" />
            </div>
          </div>
          
          {/* Glowing underline effect */}
          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-slow"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
