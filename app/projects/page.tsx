'use client';

import ProjectCard from "../components/ProjectCard";
import { ProjectCardComp } from "../components/ProjectCard";

const cards: ProjectCardComp[] = [
    {
        id: 1,
        title: "ASL to English Translator",
        description: ["Real-time ASL(American Sign Language) to English communication software built on Apple Vision Pro."
            , "Innovative translation pipeline built based on native 3D hand-pose tracking.",
            "Context-aware language refinement using Apple's Foundation large language model (LLM).",
            "Tech Stack: Swift, SwiftUI, VisionOS, ARKit, CoreML, Foundation Models"],
        image: "/yellow-circle.png",
        imageAlt: "Image 1",
    },
    {
        id: 2,
        title: "Vysper: Refactoring with OpenRewrite",
        description: [
            "Conducted a controlled empirical study with graduate software engineering students comparing traditional problem-solving vs. GenAI (LLM)-assisted approaches on a refactoring task.",
            "Authored custom OpenRewrite recipes to automate dependency upgrades and API migrations.",
            "Tech Stack: Java, OpenRewrite, JUnit, Maven"
        ],
        link: {
            url: "https://conf.researchr.org/details/icse-2026/icse-2026-software-engineering-education-and-training--seet-/46/Prompting-Without-Principles-Are-Students-Transferring-Software-Engineering-Knowledg",
            label: "View paper",
        },
        image: "/pink-circle.png",
        imageAlt: "Image 2",
    },
    {
        id: 3,
        title: "Virtual Band",
        description: ["A React-based web application that generates AI music and album covers from lyrics.",
            "Built with PiAPI's DiffRhythm API for music generation.",
            "Social Impact and App Innovation Award at SV Scholars' AI Hackathon 2025"
        ],
        image: "/blue-circle.png",
        imageAlt: "Image 3",
    },
];

export default function Projects() {
    return (
        <div className="mb-10 flex flex-col items-center justify-center px-6 font-sans sm:px-4">
            <ProjectCard cards={cards}/>
        </div>
    )
}