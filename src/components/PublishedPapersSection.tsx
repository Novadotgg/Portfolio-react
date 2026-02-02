import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink, Quote, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    title: "Revolutionizing Indian Farming: Machine Learning-Powered NLP for Optimal Crop Recommendations",
    journal: "Elsevier Computer Science Procedia",
    date: "2025",
    type: "Journal Article",
    description:
      "Sustainable development and economic progress in the agricultural sector depend on Indian farmers’ crop productivity. This work offers a novel approach that uses natural language processing (NLP) to suggest Indian farmers the best crop-production plans. The NLP model offers customized recommendations for crop selections that are in line with the environmental conditions by examining historical crop data and meteorological variables.",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050925015571",
  },
  {
    title: "From Data to Harvest: Leveraging Machine Learning and Dataset Visualization for Crop Prediction",
    journal: "Springer Nature Link",
    date: "2026",
    type: "Conference Paper",
    description:
      "Improving farmers’ crop yield is crucial to the agriculture sector’s sustainable growth and economic advancement in India. AI improves agriculture by optimising planting, harvesting, and resource utilisation through the analysis of soil, weather, and crop health data. This effort attempts to determine the best model for recommending ideal crops by evaluating model performance under various circumstances.",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-14531-4_36",
  },
];

export default function PublishedPapersSection() {
  return (
    <section id="papers" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Sharing findings and innovations through academic excellence and peer-reviewed publications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group relative animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="relative bg-secondary/30 backdrop-blur-lg border border-white/5 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl will-change-transform">
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-5 bg-emerald-500/10 rounded-2xl transition-colors shrink-0">
                      <BookOpen size={32} className="text-emerald-400" />
                    </div>

                    <div className="flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-none px-3 py-1 font-semibold uppercase tracking-wider text-[10px]">
                            {paper.type}
                          </Badge>
                          <Badge variant="outline" className="border-white/10 text-muted-foreground text-[10px] uppercase tracking-wider">
                            {paper.date}
                          </Badge>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight transition-colors">
                          {paper.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-emerald-500/70">
                          <span className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            {paper.journal}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Published in {paper.date}
                          </span>
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -left-6 -top-2 h-12 w-12 text-emerald-500/5 rotate-180" />
                        <p className="text-muted-foreground leading-relaxed text-lg tracking-tight relative z-10">
                          {paper.description}
                        </p>
                      </div>

                      <Button
                        asChild
                        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-6 h-auto text-lg font-semibold group/btn relative overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      >
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                          <span>Read Publication</span>
                          <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 skew-x-12" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
