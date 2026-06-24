import React from "react";


const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <img
          src="https://plus.unsplash.com/premium_photo-1661508546739-271586a69844?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
        />
      </div>

      <div className="about-right">
        <span className="about-tag">About Us</span>

        <h1>
          Building The Future Of
          <br />
          Digital Banking
        </h1>

        <p>
          We provide secure, reliable, and innovative banking
          solutions that help customers manage their finances
          efficiently. Our mission is to make digital banking
          simple, accessible, and trustworthy for everyone.
        </p>

        <div className="about-features">
          <p>✓ Secure Banking</p>
          <p>✓ Fast Transactions</p>
          <p>✓ 24/7 Customer Support</p>
          <p>✓ Smart Financial Insights</p>
        </div>

        <button className="about-btn">
          Learn More →
        </button>
      </div>
    </section>
  );
};

export default About;