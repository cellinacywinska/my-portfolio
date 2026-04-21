'use client';

import ResumeCard, { ResumeCardComp } from "../components/ResumeCard";

const cards: ResumeCardComp[] = [
  {
    id: 1,
    title: "Graduate Researcher",
    description: [
      "Developed two mixed reality applications for Apple Vision Pro (Swift, SwiftUI, ARKit) to enable real-time 3D ASL-to-English translation",
      "Built a real-time hand-tracking translation system with quantized ML models and an on-device LLM (first application)",
      "Designed and led the implementation of a custom 3D data collection pipeline transforming raw hand skeleton data into structured datasets through live user sessions (second application)",
      "Co-authored a research paper (under review) and slated for open-source release to help other researchers solve the current lack of high-quality ASL spatial data",
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
