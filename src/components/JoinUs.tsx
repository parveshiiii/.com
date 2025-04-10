
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";

const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:pr086832@gmail.com?subject=${encodeURIComponent(formData.subject || 'Interest in joining XenArcAI')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Email client opened",
      description: "Complete your message in your email client and send to apply.",
    });
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="join-us" className="section-padding bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          <h2 className="text-3xl font-bold mb-4">Join XenArcAI</h2>
          <p className="text-muted-foreground mb-6">
            Interested in creating AI that truly understands human emotions? We're looking for passionate 
            individuals to join our mission of building more empathetic technology.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-semibold">pr086832@gmail.com</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-card border rounded-lg shadow-lg p-6 animate-in" style={{animationDelay: "100ms"}}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="join-name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="join-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="join-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="join-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="join-subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="join-subject"
                name="subject"
                placeholder="Interest in XenArcAI position"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="join-message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="join-message"
                name="message"
                placeholder="Tell us about your experience and why you're interested in joining XenArcAI..."
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting} 
              className="w-full"
            >
              {isSubmitting ? 'Preparing Email...' : 'Draft Email to Join'} 
              <Send className="ml-2 h-4 w-4" />
            </Button>
            
            <p className="text-sm text-center text-muted-foreground mt-4">
              This will open your email client with a pre-drafted message. Review, customize, and send to apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
