import { useState } from 'react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>CompanyApp</h1>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(item.id);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
