import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/farm-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Agriculture</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Protect Your Crops with{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Smart AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Upload a photo, get instant disease detection, and receive expert advice to save your harvest. 
            Join thousands of farmers already protecting their crops with FarmFriend.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="ai" size="xl" className="shadow-2xl">
              Try AI Detection Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold">35%</span>
              </div>
              <p className="text-sm text-primary-foreground/80">Yield Improvement</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <p className="text-sm text-primary-foreground/80">Active Farmers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold">1M+</span>
              </div>
              <p className="text-sm text-primary-foreground/80">Crops Analyzed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;