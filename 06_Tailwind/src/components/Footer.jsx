import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>BankFlow</h2>
          <p>
            Secure and innovative banking solutions for
            modern customers.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <a href="#">Digital Banking</a>
          <a href="#">Investments</a>
          <a href="#">Loans</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📧 info@bankflow.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 New Delhi, India</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 BankFlow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;