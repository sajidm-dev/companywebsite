import testimonialData from '../data/testimonials.json';
import './Testimonials.css';

export default function Testimonials() {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">Read testimonials from our satisfied customers</p>
        
        <div className="testimonials-grid">
          {testimonialData.testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-meta">
                  <h4>{testimonial.name}</h4>
                  <p className="position">{testimonial.position}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <p className="message">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
