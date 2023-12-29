// Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
      </div>
    </nav>
  );
};

export default Navigation;
