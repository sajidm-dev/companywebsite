import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import './Home.css';

export default function Home({setCurrentPage}) {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Toshiba</h1>
          <p>Your trusted partner for innovative solutions and business growth</p>
          <button className="cta-button" onClick={()=> setCurrentPage('products')}>See products</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance and 99.9% uptime guarantee</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security to protect your data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative</h3>
              <p>Cutting-edge technology and creative solutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Support</h3>
              <p>24/7 dedicated support from our expert team</p>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Partners />
      <Testimonials />
    </div>
  );
}
