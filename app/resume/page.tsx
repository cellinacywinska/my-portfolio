'use client';

import ResumeCard, { ResumeCardComp } from "../components/ResumeCard";

const cards: ResumeCardComp[] = [
  {
    id: 1,
    title: "Graduate Researcher",
    description: [
      "Conducted research with Dr. Leonardo da Silva Sousa on a Real-Time ASL Translation App on Apple Vision Pro.",
      "Led frontend development of the mixed reality application for visionOS with quantized offline models.",
      "Co-authored a research paper on Real-Time ASL Translation systems with LLMs (under review).",
    ],
    employer: "Carnegie Mellon University",
    date: "Jan 2025 - Dec 2026",
    logo: "/cmu-logo.png",
    logoAlt: "Carnegie Mellon University logo",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    description: ["Built a full-stack AI-powered annotation system for ADAS (Advanced Driver Assistance Systems)",
      "Led end-to-end development of the video annotation web-app with Next.js (React), Annatorious, D3.js, and Tailwind CSS.",
      "Pitched and implemented an LLM workflow for summarization and recommendation",
      "Experimented with object tracking using SAM2 and SamWise"],
    employer: "Bosch, Research Center",
    date: "May 2025 - Aug 2026",
    logo: "/bosch-logo.png",
    logoAlt: "Bosch logo",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    description: ["Developed Thrift services to connect threat prediction ML functions in Python to Java Server for Siembol, an open source security analytics platform", "Built CI/CD pipelines to automate deployment and teardown of GitHub runners and to clean up rogue AWS instances"],
    employer: "Major League Hacking",
    date: "June 2022 - Dec 2022",
    logo: "/mlh-logo.png",
    logoAlt: "Major League Hacking logo",
  },
]

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center px-6 font-sans sm:px-4 mb-10">
      <ResumeCard cards={cards}/>
    </div>
  );
}
