import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const papers = [
  {
    title: "Revolutionizing Indian Farming: Machine Learning-Powered NLP for Optimal Crop Recommendations",
    journal: "Elsevier computer science proceedia",
    date: "2025",
    description:
      "Sustainable development and economic progress in the agricultural sector depend on Indian farmers’ crop productivity. This work offers a novel approach that uses natural language processing (NLP) to suggest Indian farmers the best crop-production plans. The NLP model offers customized recommendations for crop selections that are in line with the environmental conditions by examining historical crop data and meteorological variables. With data-driven decision-making, this strategy intends to enhance farmers’ profitability and foster a more just and efficient agricultural market. The results show how NLP can revolutionize conventional farming methods and promote a better life for farmers to thrive.",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050925015571",
  },
  {
    title: "From Data to Harvest: Leveraging Machine Learning and Dataset Visualization for Crop Prediction",
    journal: "Springer Nature Link",
    date: "2026",
    description:
      "Improving farmers’ crop yield is crucial to the agriculture sector’s sustainable growth and economic advancement in India. AI improves agriculture by optimising planting, harvesting, and resource utilisation through the analysis of soil, weather, and crop health data. It helps with crop selection, pest control, and disease identification, boosting yields while reducing waste. By supporting sustainable farming, this data-driven strategy aids farmers in adjusting to shifting market and environmental conditions. In order to maximise crop recommendation accuracy, this study consists of dataset visualization and comparison several Machine Learning models using optimised hyperparameter tuning. This effort attempts to determine the best model for recommending ideal crops by evaluating model performance under various circumstances, ultimately assisting farmers in making data-driven decisions. In addition to increasing yields, this strategy strengthens the agricultural framework, which supports the objectives of sustainable growth and economic development in the Indian agricultural sector.",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-14531-4_36",
  },
];

export default function PublishedPapersSection() {
  return (
    <section id="papers" className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-gradient">Published Papers</span>
      </h2>
      <div className="grid gap-6">
        {papers.map((paper, index) => (
          <Card key={index} className="bg-secondary/50 border border-muted card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {paper.journal} &middot; {paper.date}
              </p>
              <p className="text-foreground leading-relaxed">{paper.description}</p>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  View Paper
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
