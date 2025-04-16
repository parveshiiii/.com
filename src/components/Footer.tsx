
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
    <footer className="bg-muted/30 py-12 relative">
      {/* Enhanced lightning effect at top of footer */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Zap className="h-12 w-12 text-yellow-400 animate-pulse-slow" />
      </div>
      <div className="absolute top-0 left-1/3 transform -translate-y-1/2">
        <Zap className="h-8 w-8 text-yellow-400 animate-glow" style={{animationDelay: "0.5s"}} />
      </div>
      <div className="absolute top-0 right-1/3 transform -translate-y-1/2">
        <Zap className="h-8 w-8 text-yellow-400 animate-glow" style={{animationDelay: "0.8s"}} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center animate-in">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-yellow-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Founder & CEO of <a href="https://xenarcai.onrender.com/" className="text-yellow-500 hover:underline">XenArcAI</a> | AI & ML Visionary 
            </p>
            <p>
              &copy; {currentYear} Parvesh Rawal. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Contact: <a href="mailto:pr086832@gmail.com" className="text-yellow-500 hover:underline">pr086832@gmail.com</a> | <a href="tel:+918950466775" className="text-yellow-500 hover:underline">+91 8950466775</a>
            </p>
          </div>
          
          {/* Enhanced XenArcAI dynamic branding with lightning effects */}
          <div className="mt-8 mb-2 relative">
            <div className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent animate-pulse-slow">
              XenArcAI
            </div>
            <div className="absolute -top-4 -right-4">
              <Zap className="h-6 w-6 text-yellow-400 animate-glow" />
            </div>
            <div className="absolute -bottom-2 -left-4">
              <Zap className="h-4 w-4 text-yellow-400 animate-glow" style={{animationDelay: "0.5s"}} />
            </div>
            <div className="absolute top-2 right-1/3">
              <Zap className="h-5 w-5 text-yellow-400 animate-glow" style={{animationDelay: "0.8s"}} />
            </div>
            <div className="absolute -top-2 left-1/3">
              <Zap className="h-5 w-5 text-yellow-400 animate-glow" style={{animationDelay: "1.2s"}} />
            </div>
          </div>
          
          {/* Enhanced glowing underline effect */}
          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse-slow"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
