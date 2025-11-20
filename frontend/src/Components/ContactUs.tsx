import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-wrapper">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We're here to help. Get in touch with our support team.
      </p>

      <div className="contact-container">

        {/* LEFT: CONTACT FORM */}
        <div className="contact-form-card">
          <h2>Send us a message</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows={5}></textarea>
            </div>

            <button className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="contact-details-card">

          <h2>Support Information</h2>

          <div className="contact-item">
            <h3>📞 Phone Support</h3>
            <p>9175484351</p>
          </div>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>supportvaishnavi@service.com</p>
          </div>

          <div className="contact-item">
            <h3>⏰ Working Hours</h3>
            <p>Monday – Friday: 9am – 6pm</p>
            <p>Saturday: 10am – 4pm</p>
          </div>

          <div className="contact-item">
            <h3>📍 Office Address</h3>
            <p>HP Service Center</p>
            <p>123 Tech Park Road</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
