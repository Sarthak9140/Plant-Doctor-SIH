import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import heroImage from "../assets/farm-hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div 
        className="hero__background"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__wrapper">
          {/* Badge */}
          <div className="hero__badge">
            <Sparkles size={16} />
            <span>AI-Powered Agriculture</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero__title">
            Protect Your Crops with{" "}
            <span className="hero__title-gradient">
              Smart AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subtitle">
            Upload a photo, get instant disease detection, and receive expert advice to save your harvest. 
            Join thousands of farmers already protecting their crops with FarmFriend.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button className="btn btn--ai btn--xl">
              Try AI Detection Now
              <ArrowRight size={20} />
            </button>
            <button className="btn btn--outline btn--xl" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-content">
                <TrendingUp size={24} />
                <span>35%</span>
              </div>
              <p className="hero__stat-label">Yield Improvement</p>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-content">
                <Users size={24} />
                <span>50K+</span>
              </div>
              <p className="hero__stat-label">Active Farmers</p>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-content">
                <Sparkles size={24} />
                <span>1M+</span>
              </div>
              <p className="hero__stat-label">Crops Analyzed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-indicator-container">
          <div className="hero__scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;