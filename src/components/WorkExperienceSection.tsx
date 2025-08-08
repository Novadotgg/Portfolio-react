// import { Card, CardContent } from "@/components/ui/card";

// const experiences = [
//   {
//     company: "F-Ai",
//     role: "(ML/AI) R & D engineer",
//     duration: "June 2025",
//     location: "Bangalore, India",
//     description:
//       "Worked and developed whole system from scratch, from basic to ML to advanced in deep learning to transformers to LLM.",
//   },
//   {
//     company: "IIIT Trichy",
//     role: "Teaching Assistant DSA",
//     duration: "Jan 2025 - May 2025",
//     location: "Trichy,Tamil Nadu, India",
//     description:
//       "Assisted proffessors for teaching DSA to students",
//   },
//   {
//     company: "IIIT Trichy",
//     role: "Teaching Assistant DBMS",
//     duration: "Aug 2024 - May 2025",
//     location: "Trichy,Tamil Nadu, India",
//     description:
//       "Assisted proffessors for teaching DBMS to students",
//   },
//   {
//     company: "IIIT Trichy",
//     role: "Teaching Assistant DSA",
//     duration: "Jan 2024 - May 2024",
//     location: "Trichy,Tamil Nadu, India",
//     description:
//       "Assisted proffessors for teaching DSA to students",
//   },
//   {
//     company: "IIIT Trichy",
//     role: "Teaching Assistant Programming Paradigms",
//     duration: "Aug 2023 - Dec 2024",
//     location: "Trichy,Tamil Nadu, India",
//     description:
//       "ssisted proffessors for teaching Programming Paradigms to students.",
//   },
//   {
//     company: "Tripura University",
//     role: "Research intern",
//     duration: "June 2022 - July 2022",
//     location: "Tripura, India",
//     description:
//       "Proposed an idea of vehicle anti theft system using blockchain in smart cities.",
//   },
//   {
//     company: "The Enterpreneurship Network",
//     role: "Android Developer Associate",
//     duration: "March 2022 - April 2022",
//     location: "Delhi, India",
//     description:
//       "Developed Android Apps as per requirement, worked both at UI/UX and backend.",
//   },
// ];

// export default function WorkExperienceSection() {
//   return (
//     <section id="experience" className="py-10 px-4 md:px-20">
//       <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
//       <div className="grid gap-6">
//         {experiences.map((exp, index) => (
//           <Card key={index}>
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold">{exp.role}</h3>
//               <p className="text-sm text-gray-500">{exp.company} | {exp.duration}</p>
//               <p className="text-sm text-gray-500">{exp.location}</p>
//               <p className="mt-2 text-gray-700">{exp.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Helper function to parse start date from duration string
const parseStartDate = (duration: string): Date => {
  // Duration can be like "June 2025" or "Jan 2025 - May 2025"
  // We extract the first part before '-' and convert to Date
  const startPart = duration.split("-")[0].trim();
  // Add "1" as day for parsing
  return new Date(`${startPart} 1`);
};

const experiences = [
  {
    company: "F-Ai",
    role: "(ML/AI) R & D Engineer",
    duration: "June 2025",
    location: "Bangalore, India",
    description:
      "Worked and developed the entire system from scratch, covering classical ML to transformers and LLMs.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DSA",
    duration: "Jan 2025 - May 2025",
    location: "Trichy, Tamil Nadu, India",
    description: "Assisted professors in delivering Data Structures & Algorithms.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DBMS",
    duration: "Aug 2024 - May 2025",
    location: "Trichy, Tamil Nadu, India",
    description: "Helped facilitate DBMS coursework and labs.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - DSA",
    duration: "Jan 2024 - May 2024",
    location: "Trichy, Tamil Nadu, India",
    description: "Guided students through DSA concepts and problem-solving.",
  },
  {
    company: "IIIT Trichy",
    role: "Teaching Assistant - Programming Paradigms",
    duration: "Aug 2023 - Dec 2023",
    location: "Trichy, Tamil Nadu, India",
    description:
      "Supported professors in teaching Programming Paradigms with hands-on sessions.",
  },
  {
    company: "Tripura University",
    role: "Research Intern",
    duration: "June 2022 - July 2022",
    location: "Tripura, India",
    description:
      "Proposed a blockchain-based vehicle anti-theft system for smart cities.",
  },
  {
    company: "The Entrepreneurship Network",
    role: "Android Developer Associate",
    duration: "March 2022 - April 2022",
    location: "Delhi, India",
    description:
      "Built Android apps focusing on both UI/UX and backend development.",
  },
];

// Sort experiences by start date descending (most recent first)
experiences.sort((a, b) => parseStartDate(b.duration).getTime() - parseStartDate(a.duration).getTime());

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 md:px-20 bg-background">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-gradient">Work Experience</span>
      </h2>

      <div className="relative border-l border-emerald-500 ml-4 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            {/* Dot */}
            <div className="absolute -left-[10px] top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-lg"></div>

            <Card className="bg-secondary/50 border border-muted">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} &middot; {exp.duration}
                </p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                <p className="mt-3 text-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
