import { useState } from "react";
import { GlassPanel } from "./GlassPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import projectShowcaseImg from "@/assets/project-showcase.jpg";
import qobouliProgramsPreview from "@/assets/qobouli-programs-preview.jpg";
import qobouliTrackingPreview from "@/assets/qobouli-tracking-preview.jpg";
import karidesciPreview from "@/assets/karidesci-preview.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  thumbnail: string;
}

const projects: Project[] = [
  {
    id: "qobouli-programs",
    title: "Qobouli Programs Browser",
    description: "Built a comprehensive university program search platform helping Arab students filter 1000+ Turkish university programs by tuition, city, and major. As product lead and full-stack developer, I designed the UX and implemented real-time search with Next.js and Supabase.",
    role: "Product Lead & Full-Stack Developer",
    stack: ["Next.js", "Supabase", "shadcn/ui"],
    thumbnail: qobouliProgramsPreview
  },
  {
    id: "track-qobouli",
    title: "Qobouli Tracking System",
    description: "Created a student application tracking system that provides real-time updates on university application status. Designed the full user flow and built the frontend/backend, helping 250+ students monitor their applications efficiently.",
    role: "Product Lead & Full-Stack Developer",
    stack: ["React", "TypeScript", "Supabase"],
    thumbnail: qobouliTrackingPreview
  }
];

const stackColors: Record<string, string> = {
  "Next.js": "bg-foreground text-background",
  "React": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Supabase": "bg-green-500/10 text-green-600 dark:text-green-400",
  "TypeScript": "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "Tailwind": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "shadcn/ui": "bg-muted text-muted-foreground",
  "Recharts": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Framer Motion": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  "Lovable": "bg-purple-500/10 text-purple-600 dark:text-purple-400"
};

export function WorkSection() {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const allStacks = Array.from(new Set(projects.flatMap(p => p.stack)));
  const filteredProjects = selectedStack 
    ? projects.filter(p => p.stack.includes(selectedStack))
    : projects;

  return (
    <section id="work" className="py-20 px-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={projectShowcaseImg} 
          alt="Project showcase background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedStack === null ? "default" : "outline"}
            onClick={() => setSelectedStack(null)}
            className="btn-liquid"
          >
            {t('projects.allProjects')}
          </Button>
          {allStacks.map(stack => (
            <Button
              key={stack}
              variant={selectedStack === stack ? "default" : "outline"}
              onClick={() => setSelectedStack(selectedStack === stack ? null : stack)}
              className="btn-liquid"
            >
              {stack}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="project-grid">
          {filteredProjects.map(project => (
            <GlassPanel key={project.id} interactive className="group overflow-hidden">
              {/* Project Preview */}
              <div className="aspect-video bg-muted rounded-t-[var(--radius-glass)] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 card-content">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Role:</p>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {project.role}
                  </Badge>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className={stackColors[tech] || "bg-muted text-muted-foreground"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full btn-liquid btn-accent group-hover:scale-105"
                  onClick={() => window.open(project.thumbnail, '_blank')}
                  aria-label={`View ${project.title}`}
                >
                  View Case Study
                </Button>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}