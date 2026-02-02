import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vzbcp6n",
        "template_dfxky86",
        form.current,
        "9xPge-1NzCrOVqISG"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast({
            title: "Message failed!",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "sayandas02001@gmail.com",
      href: "mailto:sayandas02001@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9612547652",
      href: "tel:+919612547652"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question or want to work together? Feel free to reach out. I'm always open to new opportunities and creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="animate-slide-in">
              <h3 className="text-3xl font-bold mb-6 tracking-tight flex items-center gap-3">
                <MessageSquare className="text-emerald-500 h-8 w-8" />
                Contact Information
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you have a specific project in mind or just want to say hello, my inbox is always open. I'll do my best to get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={info.label}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="p-4 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                    <span className="text-emerald-400 group-hover:scale-110 transition-transform inline-block">
                      {info.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-xl font-semibold text-foreground/90 hover:text-emerald-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl font-semibold text-foreground/90">{info.value}</p>
                    )}
                  </div>
                  {info.href && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Subtle Form Shimmer */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[100%] pointer-events-none" />

              <h3 className="text-2xl font-bold mb-8 tracking-tight">Send Me a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-bold text-muted-foreground/70 uppercase tracking-wider ml-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-12 bg-background/50 border-white/5 focus:border-emerald-500/50 rounded-xl transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-muted-foreground/70 uppercase tracking-wider ml-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="h-12 bg-background/50 border-white/5 focus:border-emerald-500/50 rounded-xl transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-bold text-muted-foreground/70 uppercase tracking-wider ml-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="h-12 bg-background/50 border-white/5 focus:border-emerald-500/50 rounded-xl transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-bold text-muted-foreground/70 uppercase tracking-wider ml-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more..."
                    rows={5}
                    required
                    className="bg-background/50 border-white/5 focus:border-emerald-500/50 rounded-xl transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 rounded-xl text-lg font-bold shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="h-5 w-5 mr-3" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
