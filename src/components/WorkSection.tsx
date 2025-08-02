import { useState } from "react";
import { GlassPanel } from "./GlassPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import projectShowcaseImg from "@/assets/project-showcase.jpg";

interface Project {
  id: string;
  title: string;
  summary: string;
  role: string[];
  stack: string[];
  impact: { label: string; value: string }[];
  thumbnail: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "qobouli-programs",
    title: "Qobouli Programs Browser",
    summary: "Filter Turkish university programs by net tuition with advanced search capabilities.",
    role: ["Product", "Full-stack"],
    stack: ["Next.js", "Supabase", "shadcn/ui"],
    impact: [
      { label: "Avg. TTFB", value: "180 ms" },
      { label: "Leads", value: "+32%" }
    ],
    thumbnail: "https://qobouli.com",
    featured: true
  },
  {
    id: "track-qobouli",
    title: "Qobouli Tracking System",
    summary: "Real-time application tracking system for international students.",
    role: ["Product", "Full-stack"],
    stack: ["React", "TypeScript", "Supabase"],
    impact: [
      { label: "User Retention", value: "89%" },
      { label: "Load Time", value: "1.2s" }
    ],
    thumbnail: "https://track.qobouli.com",
    featured: true
  },
  {
    id: "karidesci-revive",
    title: "Karidesci Revival Project",
    summary: "Modern recreation of a classic Turkish shrimp recipe platform.",
    role: ["Design", "Frontend"],
    stack: ["React", "Tailwind", "Lovable"],
    impact: [
      { label: "Lighthouse Score", value: "98" },
      { label: "User Engagement", value: "+150%" }
    ],
    thumbnail: "https://karidesci-revive.lovable.app",
    featured: false
  }
];

const stackColors: Record<string, string> = {
  "Next.js": "bg-black text-white",
  "React": "bg-blue-100 text-blue-800",
  "Supabase": "bg-green-100 text-green-800",
  "TypeScript": "bg-blue-100 text-blue-900",
  "Tailwind": "bg-cyan-100 text-cyan-800",
  "shadcn/ui": "bg-gray-100 text-gray-800",
  "Recharts": "bg-purple-100 text-purple-800",
  "Framer Motion": "bg-pink-100 text-pink-800",
  "Lovable": "bg-purple-100 text-purple-800"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
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
                <iframe 
                  src={project.thumbnail} 
                  title={project.title}
                  className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {t('projects.featured')}
                    </Badge>
                  )}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className={stackColors[tech] || "bg-gray-100 text-gray-800"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Impact Metrics */}
                <div className="flex gap-4 mb-4">
                  {project.impact.map(metric => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-accent">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full btn-liquid btn-accent group-hover:scale-105"
                  onClick={() => window.open(project.thumbnail, '_blank')}
                  aria-label={`${t('projects.visitSite')} - ${project.title}`}
                >
                  {t('projects.visitSite')}
                </Button>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}