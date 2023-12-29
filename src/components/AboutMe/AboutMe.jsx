import React from "react";
import Avatar from '@mui/material/Avatar';
import "./aboutme.css";

const AboutMe = () => {
    return ( 
        <section className="about-section">
            <h1 id="about" className="section-heading">About Me</h1>
            <div className="about-content">
                <Avatar alt="Gabe Stroup" src="/image.jpg" sx={{ width: 200, height: 200, marginBottom: 2 }} />
                <p className="about-description">
                    Hello! My name's Gabe Stroup, and I'm a recent graduate of the UNC Charlotte School of Professional Studies Coding Bootcamp. I'm a full-stack web developer with a passion for creating clean, intuitive, and dynamic user experiences. I'm a lifelong learner, and I'm always looking for new ways to challenge myself and expand my skillset. I'm currently looking for a position as a web developer, and I'm excited to see where my journey takes me next!
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
