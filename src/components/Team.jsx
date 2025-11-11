import teamData from '../data/team.json';
import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p className="section-subtitle">Meet the talented people behind our success</p>
        
        <div className="team-grid">
          {teamData.team.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href={`mailto:${member.social.email}`}>Email</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
