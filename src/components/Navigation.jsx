import { useState } from "react";
import { Leaf, Bot, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__content">
          {/* Logo */}
          <div className="navigation__logo">
            <div className="navigation__logo-icon">
              <Leaf />
            </div>
            <span className="navigation__logo-text">FarmFriend</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation__nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#community">Community</a>
            <a href="#pricing">Pricing</a>
          </div>

          {/* CTA Buttons */}
          <div className="navigation__actions">
            <button className="btn btn--ai btn--sm">
              <Bot size={16} />
              AI Mode
            </button>
            <button className="btn btn--hero btn--sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="navigation__mobile-toggle"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navigation__mobile-menu">
            <div className="navigation__mobile-menu-content">
              <a href="#features">Features</a>
              <a href="#how-it-works">How it Works</a>
              <a href="#community">Community</a>
              <a href="#pricing">Pricing</a>
              <div className="navigation__mobile-menu-actions">
                <button className="btn btn--ai btn--sm">
                  <Bot size={16} />
                  AI Mode
                </button>
                <button className="btn btn--hero btn--sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;