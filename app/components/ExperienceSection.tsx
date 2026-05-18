import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";
import { CardSection } from "./CardSection";
import { TrendingUp, PieChart, BarChart3, Zap } from 'lucide-react';

const experiences = [
    {
        title: "Frontend Developer",
        startDate: "December 2024",
        endDate: "Present",
        company:
            'PT Integra Solusi Mandiri',
        description: "Collaborating with Business Analysts to translate requirements into functional solutions. Building and maintaining user interfaces for enterprise HRIS and procurement systems (PRISCA & CHERRY APP) using Vue.js, TypeScript, and Tailwind CSS.",
        achievements: [
            "Developed responsive user interfaces for enterprise systems",
            "Collaborated with cross-functional teams (designers, backend devs, QA)",
            "Optimized web applications for performance across devices"
        ],
    },
    {
        title: "Junior Programmer",
        startDate: "February 2024",
        endDate: "November 2024",
        company:
            'Prosesin.id',
        description: "Developed and maintained full-stack web applications for clients using modern technologies. Responsibilities included database design, API development, frontend implementation, and ensuring applications are visually appealing and functional.",
        achievements: [
            "Built full-stack applications with React, Next.js, PHP Laravel, and MySQL",
            "Collaborated with cross-functional teams for diverse projects",
            "Implemented responsive designs based on specifications"
        ],
    },
    {
        title: "Frontend Web Developer",
        startDate: "August 2023",
        endDate: "December 2023",
        company: "Pilih Jurusan",
        description: "Developed Pilih Jurusan web application serving 10,000+ students nationwide. Used TDD agile methodology with expertise in design slicing, component styling, layouts, and loading skeletons using React.js, Next.js, and TypeScript.",
        achievements: [
            "Served 10,000+ students with career counseling platform",
            "Implemented design-to-code with high fidelity",
            "Followed TDD agile development methodology"
        ],
    },
];
export default function ExperienceSection() {
    return (
        <div id="about" className="px-4 sm:px-6 lg:px-32 py-20 ">
            <div
                className="mb-12"
                style={{ animation: 'slideInUp 0.6s ease-out' }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary" style={{ animation: 'expandWidth 0.8s ease-out 0.2s both' }} />
            </div>

            <div className="flex flex-col gap-8"
                style={{ animation: 'slideInUp 0.6s ease-out 0.1s both' }}>
                {experiences.map((experience, index) => (
                    <CardSection key={index} {...experience} />
                ))}
            </div>

        </div>
    );
}
