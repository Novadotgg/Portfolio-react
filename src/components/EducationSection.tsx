
// import React from 'react';
// import { GraduationCap, Calendar, School, BookOpen } from 'lucide-react';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

// interface EducationItemProps {
//   degree: string;
//   institution: string;
//   period: string;
//   grade: string;
//   icon: React.ReactNode;
// }

// const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, grade, icon }) => {
//   return (
//     <Card className="mb-4 bg-secondary/50 border border-muted hover:shadow-md transition-shadow">
//       <CardHeader className="flex flex-row items-center gap-4 pb-1">
//         <div className="p-3 bg-emerald-400/20 rounded-md">
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">{degree}</h3>
//           <p className="text-muted-foreground">{institution}</p>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableBody>
//             <TableRow>
//               <TableCell className="py-2 pl-0 font-medium flex items-center">
//                 <Calendar size={16} className="mr-2 text-emerald-400" />
//                 <span>Period</span>
//               </TableCell>
//               <TableCell className="py-2">{period}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="py-2 pl-0 font-medium flex items-center">
//                 <School size={16} className="mr-2 text-emerald-400" />
//                 <span>Grade</span>
//               </TableCell>
//               <TableCell className="py-2">{grade}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// };

// const EducationSection: React.FC = () => {
//   const educationHistory = [
//     {
//       degree: "M.Tech, Computer Science & Engineering",
//       institution: "IIIT Trichy",
//       period: "2023 – 2025",
//       grade: "CGPA: 8.5/10",
//       icon: <GraduationCap size={24} className="text-emerald-400" />
//     },
//     {
//       degree: "B.Tech, Computer Science & Engineering",
//       institution: "NERIST",
//       period: "2019 – 2023",
//       grade: "CGPA: 8.52/10",
//       icon: <GraduationCap size={24} className="text-emerald-400" />
//     },
//     {
//       degree: "XII (Class 12 Equivalent)",
//       institution: "NERIST",
//       period: "2017 – 2019",
//       grade: "CGPA: 8.61/10",
//       icon: <BookOpen size={24} className="text-emerald-400" />
//     },
//     {
//       degree: "X",
//       institution: "Don Bosco School",
//       period: "2017",
//       grade: "CGPA: 10/10",
//       icon: <School size={24} className="text-emerald-400" />
//     }
//   ];

//   return (
//     <section id="education" className="section-padding">
//       <div className="container">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-2">My <span className="text-gradient">Education</span></h2>
//           {/* <p className="text-muted-foreground max-w-2xl mx-auto">
//             Academic background and qualifications
//           </p> */}
//         </div>
        
//         <div className="max-w-3xl mx-auto">
//           {educationHistory.map((item, index) => (
//             <EducationItem 
//               key={index}
//               degree={item.degree}
//               institution={item.institution}
//               period={item.period}
//               grade={item.grade}
//               icon={item.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationSection;
import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  icon: React.ReactNode;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, grade, icon }) => {
  return (
    <Card className="mb-4 bg-secondary/50 border border-muted hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-1">
        <div className="p-3 bg-emerald-400/20 rounded-md">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-4">
            {degree}
            <span className="text-sm font-normal text-muted-foreground">
              ({period}, {grade})
            </span>
          </h3>
          <p className="text-muted-foreground">{institution}</p>
        </div>
      </CardHeader>
    </Card>
  );
};

const EducationSection: React.FC = () => {
  const educationHistory = [
    {
      degree: "M.Tech, Computer Science & Engineering",
      institution: "IIIT Trichy",
      period: "2023 – 2025",
      grade: "CGPA: 8.5/10",
      icon: <GraduationCap size={24} className="text-emerald-400" />
    },
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "NERIST",
      period: "2019 – 2023",
      grade: "CGPA: 8.52/10",
      icon: <GraduationCap size={24} className="text-emerald-400" />
    },
    {
      degree: "XII (Class 12 Equivalent)",
      institution: "NERIST",
      period: "2017 – 2019",
      grade: "CGPA: 8.61/10",
      icon: <BookOpen size={24} className="text-emerald-400" />
    },
    {
      degree: "X",
      institution: "Don Bosco School",
      period: "2017",
      grade: "CGPA: 10/10",
      icon: <School size={24} className="text-emerald-400" />
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-gradient">Education</span></h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((item, index) => (
            <EducationItem 
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              grade={item.grade}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
