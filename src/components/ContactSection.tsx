
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of these contact methods. I'm always open
                to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-400/20 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Email</h4>
                  <a href="mailto:hello@example.com" className="text-lg font-medium hover:text-emerald-400">
                    sayandas02001@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-400/20 rounded-full">
                  <Phone className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg font-medium hover:text-emerald-400">
                    +91 9612547652
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-400/20 rounded-full">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Location</h4>
                  <p className="text-lg font-medium">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-8 border border-muted shadow-lg">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-background border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-background border-muted"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
