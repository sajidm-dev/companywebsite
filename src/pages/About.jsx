import Team from '../components/Team';
import Partners from '../components/Partners';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About CompanyApp</h1>
        <p>Learn about our mission, values, and the team behind our success</p>
      </section>

      <div className="container">
        <section className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, CompanyApp has been at the forefront of innovation and business solutions.
              What started as a small startup has grown into a trusted partner for hundreds of businesses worldwide.
            </p>
            <p>
              Our journey has been marked by continuous innovation, customer-centric approach, and a commitment
              to delivering excellence in everything we do.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with innovative, reliable, and scalable solutions that drive growth,
              efficiency, and success in the digital age.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🎯 Excellence</h3>
                <p>We strive for excellence in every aspect of our work</p>
              </div>
              <div className="value-card">
                <h3>🤝 Integrity</h3>
                <p>We conduct business with honesty and transparency</p>
              </div>
              <div className="value-card">
                <h3>💡 Innovation</h3>
                <p>We embrace creativity and continuous improvement</p>
              </div>
              <div className="value-card">
                <h3>👥 Customer Focus</h3>
                <p>Your success is our success</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Work With Us</h2>
            <ul className="benefits-list">
              <li>✓ 10+ years of industry experience</li>
              <li>✓ Trusted by 500+ companies worldwide</li>
              <li>✓ Award-winning customer service</li>
              <li>✓ Cutting-edge technology solutions</li>
              <li>✓ Dedicated support team available 24/7</li>
              <li>✓ Transparent pricing with no hidden fees</li>
            </ul>
          </div>
        </section>
      </div>

      <Team />
      <Partners />
    </div>
  );
}
