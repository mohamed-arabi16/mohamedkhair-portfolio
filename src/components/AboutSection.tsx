import { GlassPanel } from "./GlassPanel";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Users, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Mohamed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey from computer engineering to digital media, driven by passion, 
            ethics, and the pursuit of meaningful technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2">
            <GlassPanel className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born in <span className="text-foreground font-medium">Syria</span> and carrying 
                  <span className="text-foreground font-medium"> Sudanese nationality</span>, 
                  I now call <span className="text-foreground font-medium">Istanbul, Turkey</span> home. 
                  My journey began with a degree in Computer Engineering, but life had different 
                  plans that led me into the vibrant world of digital media.
                </p>
                <p>
                  What started as a technical background evolved into a passion for creating 
                  engaging content and building web applications that solve real problems. 
                  I've discovered that the intersection of technology and creativity is where 
                  the most impactful solutions emerge.
                </p>
                <p>
                  Working closely with my wife, we bring diverse perspectives to every project. 
                  This collaboration has taught me that the best solutions often come from 
                  combining different viewpoints and skill sets. Together, we've built 
                  <span className="text-accent font-medium"> Qobouli</span>, helping international 
                  students navigate university applications in Turkey.
                </p>
                <p>
                  I believe in <span className="text-foreground font-medium">ethical work practices</span> 
                  and <span className="text-foreground font-medium">complete transparency</span>. 
                  Every project includes regular updates, honest communication, and a commitment 
                  to delivering solutions that truly serve our clients' needs.
                </p>
              </div>
            </GlassPanel>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">Global Perspective</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Syria-born, Sudanese national, Istanbul-based. Bringing multicultural 
                insights to every project.
              </p>
            </GlassPanel>

            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">Career Evolution</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Computer Engineering graduate turned digital media specialist, 
                combining technical skills with creative vision.
              </p>
            </GlassPanel>

            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">Collaborative Approach</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Working in partnership with my wife, bringing diverse perspectives 
                and shared values to every project.
              </p>
            </GlassPanel>

            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">Core Values</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ethical practices, transparency, and meaningful technology that 
                creates positive impact.
              </p>
            </GlassPanel>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassPanel className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold mb-3">Ethical First</h4>
            <p className="text-sm text-muted-foreground">
              Every project is built on a foundation of honest communication, 
              fair practices, and mutual respect.
            </p>
          </GlassPanel>

          <GlassPanel className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold mb-3">Global Mindset</h4>
            <p className="text-sm text-muted-foreground">
              Drawing from multicultural experiences to create solutions 
              that work across different contexts and communities.
            </p>
          </GlassPanel>

          <GlassPanel className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold mb-3">Collaborative Spirit</h4>
            <p className="text-sm text-muted-foreground">
              Believing that the best solutions emerge from combining 
              different perspectives and working together.
            </p>
          </GlassPanel>
        </div>

        {/* Skills & Expertise - Improved Layout */}
        <GlassPanel className="p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded bg-accent/20"></div>
              </div>
              <h4 className="font-semibold mb-4 text-accent text-lg">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React", "Next.js", "TypeScript", "Node.js", "Supabase", 
                  "Tailwind CSS", "Git", "API Development"
                ].map(skill => (
                  <div key={skill} className="glass-panel px-3 py-2 text-sm font-medium bg-accent/5 border-accent/20">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Creative Skills */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-accent/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded bg-orange-accent/20"></div>
              </div>
              <h4 className="font-semibold mb-4 text-orange-accent text-lg">Creative Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Content Creation", "Instagram Reels", "Video Editing", 
                  "UI/UX Design", "Brand Strategy", "Storytelling"
                ].map(skill => (
                  <div key={skill} className="glass-panel px-3 py-2 text-sm font-medium bg-orange-accent/5 border-orange-accent/20">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-secondary/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded bg-teal-secondary/20"></div>
              </div>
              <h4 className="font-semibold mb-4 text-teal-secondary text-lg">Languages</h4>
              <div className="space-y-3">
                {[
                  "Arabic (Native)", "English (Fluent)", "Turkish (Conversational)"
                ].map(lang => (
                  <div key={lang} className="glass-panel px-4 py-3 text-sm font-medium bg-teal-secondary/5 border-teal-secondary/20">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}