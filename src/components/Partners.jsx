import partnerData from '../data/partners.json';
import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2>Our Trusted Partners</h2>
        <p className="section-subtitle">We collaborate with industry leaders to deliver excellence</p>
        
        <div className="partners-grid">
          {partnerData.partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
