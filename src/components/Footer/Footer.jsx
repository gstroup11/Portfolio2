// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/gstroup11" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/glswebdev/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/21956379/gstroup11" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
        <a href="https://www.facebook.com/gabe.stroup.5" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;