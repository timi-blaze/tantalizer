import React from "react";
import "./franchise.css";

const Franchise: React.FC = () => {
  return (
    <div className="franchise">

      {/* HERO SECTION */}
      <section className="franchise-hero">
        <div className="hero-overlay">
          <h1>Own a Piece of the Flavor</h1>
          <p>
            Join the Tantalizers family and bring unforgettable taste experiences
            to your community.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Become a Partner</button>
            <button className="secondary-btn">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="franchise-section">
        <h2>Why Choose Tantalizers?</h2>

        <div className="grid">
          <div className="card">
            <h3>Proven Brand</h3>
            <p>Trusted by thousands with consistent quality and taste.</p>
          </div>

          <div className="card">
            <h3>High Demand</h3>
            <p>Fast food is growing — and we’re leading the space.</p>
          </div>

          <div className="card">
            <h3>Full Support</h3>
            <p>From setup to operations, we guide you all the way.</p>
          </div>

          <div className="card">
            <h3>Marketing Power</h3>
            <p>Strong brand presence and nationwide campaigns.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="franchise-section alt">
        <h2>Your Journey Starts Here</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Apply</h3>
            <p>Submit your interest and tell us about your vision.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Review</h3>
            <p>We evaluate and get in touch with you.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Training</h3>
            <p>Get hands-on training and prepare your outlet.</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Launch</h3>
            <p>Open your store and start serving customers.</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="franchise-section">
        <h2>Investment Overview</h2>

        <p className="center-text">
          Starting your franchise is a rewarding investment. Costs depend on
          location and store size.
        </p>

        <ul className="investment-list">
          <li>Initial Franchise Fee</li>
          <li>Store Setup & Equipment</li>
          <li>Staff Training</li>
          <li>Operational Support</li>
        </ul>
      </section>

  

      {/* TESTIMONIALS */}
      <section className="franchise-section">
        <h2>What Our Partners Say</h2>

        <div className="testimonials">
          <div className="testimonial">
            <p>
              “Joining Tantalizers was the best decision I made. The support is
              unmatched.”
            </p>
            <h4>- Franchise Owner</h4>
          </div>

          <div className="testimonial">
            <p>
              “Everything from training to launch was smooth and professional.”
            </p>
            <h4>- Outlet Manager</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="franchise-cta">
        <h2>Ready to Build Something Delicious?</h2>
        <p>Start your journey with us today.</p>

        <button className="primary-btn">Apply Now</button>
      </section>

    </div>
  );
};

export default Franchise;