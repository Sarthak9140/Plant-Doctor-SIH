import { Button } from "@/components/ui/button";
import { Camera, Brain, MessageCircle, Users, Cloud, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI-Powered Disease Detection",
    description: "Simply upload a photo of your crops and get instant, accurate disease identification using advanced computer vision.",
    highlight: "99.2% Accuracy"
  },
  {
    icon: Brain,
    title: "Instant Advisory & Remedies",
    description: "Receive personalized treatment recommendations with both organic and chemical remedy options tailored to your specific situation.",
    highlight: "Smart Recommendations"
  },
  {
    icon: MessageCircle,
    title: "Ask an Expert",
    description: "Connect directly with certified agricultural experts for detailed diagnosis and professional advice when you need human expertise.",
    highlight: "24/7 Support"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Join a vibrant community of farmers sharing experiences, solutions, and learning from each other's successes.",
    highlight: "50K+ Members"
  },
  {
    icon: Cloud,
    title: "Weather Forecast & Alerts",
    description: "Get localized weather forecasts and receive timely alerts to help you plan your farming activities effectively.",
    highlight: "Real-time Updates"
  },
  {
    icon: TrendingUp,
    title: "Crop Health Analytics",
    description: "Track your crop health over time with detailed analytics and insights to optimize your farming practices.",
    highlight: "Data-Driven Insights"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need to
            <br />
            <span className="text-primary">Protect Your Crops</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            FarmFriend combines cutting-edge AI technology with expert knowledge to give farmers the tools they need to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card p-6 rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-hero p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-medium">
                  {feature.highlight}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of farmers who are already protecting their crops with FarmFriend's AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;