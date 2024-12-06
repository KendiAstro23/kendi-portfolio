import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cnwshra", // Replace with your EmailJS service ID
        "template_qaaf08l", // Replace with your EmailJS template ID
        formData,
        "MVXJ0UiVJd9M9ZR0q" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setSuccessMessage("There was an error sending your message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact">
    <div className="contact-section">
      <h2>Let's Work Together</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </section>
  );
};

export default ContactForm;
