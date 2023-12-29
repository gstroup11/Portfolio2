// Resume.jsx
import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h1 id="resume" className="section-heading">
        Resume
      </h1>

      <div className="resume-content">
        <div className="resume-display">
          <iframe
            title="Resume"
            src="/resume.pdf"
            width="100%"
            height="600px"
          ></iframe>
        </div>

        <p>
          Download my resume:{' '}
          <a
            href="/resume.pdf" 
            download
          >
            Resume PDF
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
