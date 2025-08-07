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
  // {
  //   title: "Secure Cognitive Radio Networks using Blockchain",
  //   journal: "Elsevier Journal of Communication Networks",
  //   date: "Dec 2023",
  //   description:
  //     "Introduces a blockchain-secured architecture for CRNs.",
  //   link: "https://doi.org/10.1016/j.ijcn.2023.08.001",
  // },
];

export default function PublishedPapersSection() {
  return (
    <section id="papers" className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Published Papers</h2>
      <div className="grid gap-6">
        {papers.map((paper, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-500">{paper.journal} | {paper.date}</p>
              <p className="mt-2 text-gray-700">{paper.description}</p>
              <Button className="mt-3" asChild>
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
