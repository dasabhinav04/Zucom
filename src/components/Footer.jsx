import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-title">Zu<span className="highlight">COM</span></h3>
          <p className="footer-text">
            A complete CRUD-based product management solution built using 
            React, PHP & MySQL.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Project</a></li>
            <li><a href="#">My Portfolio</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">Email: dasabhinav1998@gmail.com</p>
          <p className="footer-text">Location: Thane, Maharastra, India</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4 className="footer-heading">Follow Me</h4>
          <div className="footer-social">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ZuCOM. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
