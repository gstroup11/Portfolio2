import React, { useState, useRef } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import "./contact.css"; 

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form
    const { from_name, from_email } = formData;
    const newErrors = {};

    if (!from_name.trim()) {
      newErrors.from_name = "Name is required";
    }

    if (!from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!validateEmail(from_email)) {
      newErrors.from_email = "Invalid email address";
    }

    // If there are errors, update the state and don't submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send email using email.js
    emailjs
      .sendForm(
        "service_5x5xm5m",
        "template_0126yye",
        form.current,
        "F4hAyspvK47lwtTWD"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <h1 id="contact" className="section-heading">
        Contact
      </h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-container">
          <div className="styled-input">
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <span></span>
            <label>Name</label>
          </div>
          {errors.from_name && (
            <p className="invalid-feedback">{errors.from_name}</p>
          )}
        </div>

        <div className="input-container">
          <div className="styled-input">
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
            />
            <span></span>
            <label>Email</label>
          </div>
          {errors.from_email && (
            <p className="invalid-feedback">{errors.from_email}</p>
          )}
        </div>

        <div className="input-container wide">
          <div className="styled-input">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span></span>
            <label>Message</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
