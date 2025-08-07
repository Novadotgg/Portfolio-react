import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "F-Ai",
    role: "(ML/AI) R & D engineer",
    duration: "June 2025",
    location: "Bangalore, India",
    description:
      "Worked and developed whole system from scratch, from basic to ML to advanced in deep learning to transformers to LLM.",
  },
  {
    company: "Tripura University",
    role: "Research intern",
    duration: "June 2022 - July 2022",
    location: "Tripura, India",
    description:
      "Proposed an idea of vehicle anti theft system using blockchain in smart cities.",
  },
  {
    company: "The Enterpreneurship Network",
    role: "Android Developer Associate",
    duration: "March 2022 - April 2022",
    location: "Delhi, India",
    description:
      "Developed Android Apps as per requirement, worked both at UI/UX and backend.",
  },
];

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.company} | {exp.duration}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
