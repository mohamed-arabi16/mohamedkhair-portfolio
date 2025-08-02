import { GlassPanel } from "./GlassPanel";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Development workspace" 
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/80 via-background/70 to-accent/20" />
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Full-Stack</span>
            <br />
            <span className="text-accent drop-shadow-lg">Developer</span>
            <br />
            <span className="text-white drop-shadow-lg">& Content Creator</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Syrian-born, Sudanese developer in Istanbul crafting lightning-fast web applications 
            and viral content that drives real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="btn-liquid btn-accent px-8 py-4 text-lg shadow-lg w-full sm:w-auto"
              >
                View My Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-liquid px-8 py-4 text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg w-full sm:w-auto"
              >
                Let's Connect
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <GlassPanel className="hero-stat p-6 text-center backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-hero-stat-number mb-1">50+</div>
              <div className="text-hero-stat-text">Projects Completed</div>
            </GlassPanel>
            <GlassPanel className="hero-stat p-6 text-center backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-hero-stat-number mb-1">150K+</div>
              <div className="text-hero-stat-text">Content Views</div>
            </GlassPanel>
            <GlassPanel className="hero-stat p-6 text-center backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-hero-stat-number mb-1">92%</div>
              <div className="text-hero-stat-text">Client Satisfaction</div>
            </GlassPanel>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}