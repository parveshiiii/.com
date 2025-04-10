
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/your-username', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://linkedin.com/in/your-profile', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://twitter.com/your-handle', 
      label: 'Twitter' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:your.email@example.com', 
      label: 'Email' 
    },
  ];

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Designed & Built with ❤️ 
            </p>
            <p>
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
