import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>Reach out to us anytime! We'd love to hear from you.</p>
      <form className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: 500, margin: "0 auto" }}>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <input className="form-control" type="email" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows={3} placeholder="Your message"></textarea>
        </div>
        <button className="btn btn-dark" type="submit">Send Message</button>
      </form>
    </div>
  );
}
