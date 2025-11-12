import teamData from '../data/team.json';
import './Team.css';

export default function Team({data: teamData}) {
  if(!teamData) {
    return <div>Loading team data...</div>;
  }
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p className="section-subtitle">Meet the talented people behind our success</p>
        
        <div className="team-grid">
          {teamData.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.role}</p>
                <div className="social-links">
                  <a href={"suiii"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={"suiii"} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href={`mailto:${"suiii"}}`}>Email</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
