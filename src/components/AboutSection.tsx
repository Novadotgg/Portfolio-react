
import React from 'react';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About <span className="text-gradient">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me and my background.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I am Computer Science Engineer with expertise in Data Structures & Algorithms, Machine Learning, NLP, Blockchain, Web & Android
 Development. Passionate about solving real-world problems with technology..
            </p>
            <p className="text-muted-foreground mb-6">
              I am an M.Tech student in Computer Science and Engineering, passionate about developing innovative solutions in both software development and machine learning. My technical expertise spans multiple programming languages, including C, C++, Python along with web technologies like HTML, CSS, JavaScript, Next JS, Flask and Django.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in machine learning, deep learning, and NLP, I enjoy solving real-world challenges. I have experience in Android development using React Native and have explored blockchain with Solidity. My skills also include data structures, MySQL, Firebase, and full-stack development. I’m passionate about continuous learning and growth. I aim to contribute to impactful software engineering and ML projects.
            </p>
          
          </div>
          
          <div className="bg-secondary/50 p-8 rounded-lg shadow-lg border border-muted">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <User className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Name</h4>
                  <p className="text-lg font-medium">Sayan Das</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Email</h4>
                  <p className="text-lg font-medium">sayandas02001@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-400/20 rounded-md">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Location</h4>
                  <p className="text-lg font-medium">India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-emerald-400/20 rounded-md">
                  <Calendar className="h-6 w-6 text-emerald-400" />
                </div> 
                 <div>
                  <h4 className="text-sm text-muted-foreground">Highest qualification</h4>
                  <p className="text-lg font-medium">M.Tech</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
