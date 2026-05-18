import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";
import { CardSection } from "./CardSection";
import { TrendingUp, PieChart, BarChart3, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <div id="about" className="px-4 sm:px-6 lg:px-32 py-20 ">
      <div
        className="mb-12"
        style={{ animation: 'slideInUp 0.6s ease-out' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary" style={{ animation: 'expandWidth 0.8s ease-out 0.2s both' }} />
      </div>

      <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12"
        style={{ animation: 'slideInUp 0.6s ease-out 0.1s both' }}>
        <p className="text-lg leading-relaxed text-foreground mb-6">Results-driven <span className="text-primary font-semibold">Frontend Developer</span> with a strong foundation in Information Systems (GPA 3.78/4.00) and hands-on experience building responsive, high-performance web applications. Currently contributing to enterprise HRIS and procurement systems at <span className="text-primary font-semibold">PT Integra Solusi Mandiri.</span></p>
        <p className="text-lg leading-relaxed text-foreground mb-6">Skilled at translating UI/UX designs into reusable components, improving performance, and collaborating with cross-functional teams. Previously delivered a web application serving <span className="text-primary font-semibold"> 10,000+ students</span> nationwide. Proficient in <span className="text-primary font-semibold">Vue.js, React, Next.js, TypeScript, Tailwind CSS, PHP Laravel, and MySQL.</span>
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-6">Committed to continuous learning, problem-solving, and creating intuitive digital experiences that increase user satisfaction and support business objectives. Certified <span className="text-primary font-semibold">Front-End Web Developer Expert</span> from Dicoding (2023).
        </p>
      </div>

    </div>
  );
}
