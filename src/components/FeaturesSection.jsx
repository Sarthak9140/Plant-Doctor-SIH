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
    <section id="features" className="features">
      <div className="features__container">
        {/* Section Header */}
        <div className="features__header">
          <div className="features__badge">
            <Brain size={16} />
            <span>Powerful Features</span>
          </div>
          <h2 className="features__title">
            Everything You Need to
            <br />
            <span className="features__title-highlight">Protect Your Crops</span>
          </h2>
          <p className="features__subtitle">
            FarmFriend combines cutting-edge AI technology with expert knowledge to give farmers the tools they need to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features__grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="features__card"
            >
              <div className="features__card-icon">
                <feature.icon size={24} />
              </div>
              
              <div className="features__card-header">
                <h3 className="features__card-title">{feature.title}</h3>
                <span className="features__card-highlight">
                  {feature.highlight}
                </span>
              </div>
              
              <p className="features__card-description">
                {feature.description}
              </p>
              
              <button className="features__card-button">
                Learn More
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="features__cta">
          <div className="features__cta-container">
            <h3 className="features__cta-title">Ready to Get Started?</h3>
            <p className="features__cta-description">
              Join thousands of farmers who are already protecting their crops with FarmFriend's AI technology.
            </p>
            <div className="features__cta-actions">
              <button className="btn btn--hero btn--lg">Start Free Trial</button>
              <button className="btn btn--outline btn--lg">Schedule Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;