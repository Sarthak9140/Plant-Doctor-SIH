import React from "react";
import "./About.scss";
// import aboutImage from "../../assets/images/about-hero.jpg"; // Replace with actual image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>
            Empowering Farmers with <span>Intelligent Agriculture</span>
          </h2>
          <p>
            <strong>FarmFriend</strong> is a next-generation agricultural
            platform leveraging AI, expert insights, and real-time data to help
            farmers protect their crops, increase yields, and stay informed.
            <br />
            <br />
            Our mission is to democratize access to smart farming
            solutions—starting with disease detection, expert support, and
            community engagement.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <h4>🚀 Instant AI Diagnosis</h4>
              <p>
                Upload a photo of your crop and receive a diagnosis within
                seconds using our powerful AI image recognition model.
              </p>
            </div>

            <div className="highlight">
              <h4>💬 Expert Support On Demand</h4>
              <p>
                Connect directly with certified agricultural professionals for
                advice tailored to your location, crop, and situation.
              </p>
            </div>

            <div className="highlight">
              <h4>🌱 Remedies That Work</h4>
              <p>
                Get organic and chemical treatment recommendations based on your
                crop’s condition and your preferred approach.
              </p>
            </div>

            <div className="highlight">
              <h4>📢 Community Knowledge</h4>
              <p>
                Join a growing network of farmers to share insights, solutions,
                and stories from the field.
              </p>
            </div>

            <div className="highlight">
              <h4>🌦 Weather Intelligence</h4>
              <p>
                Stay prepared with hyper-local weather forecasts, rainfall
                alerts, and temperature tracking—all integrated into your
                dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="about-image">
          <img src={aboutImage} alt="FarmFriend Overview" />
        </div> */}
      </div>
    </section>
  );
};

export default About;
