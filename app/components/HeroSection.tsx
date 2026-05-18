import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 min-h-screen px-32 py-32 gap-4  p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl flex flex-col gap-2 font-bold">
          <span className="bg-linear-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent hover:from-primary/50 hover:via-secondary/50 hover:to-primary/50">Fullstack</span>
          Developer
        </h1>
        <p className="text-lg max-w-2xl text-gray-600">
          I craft beautiful, interactive digital experiences with cutting-edge design and modern web technologies.
        </p>

        <div className="flex items-center gap-2">
          <Button>
            View Project <ArrowRight className="text-white" />
          </Button>
          <Button variant="outline">Hire Me</Button>
        </div>
      </div>

      <div>
        <Button>
          Start Tracking Free <ArrowRight className="text-white" />
        </Button>
      </div>

    </div>
  );
}
