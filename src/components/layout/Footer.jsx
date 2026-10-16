
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="footer-logo">
            O Positive <span>Health</span>
          </h2>

          <p className="footer-tagline">Care Before Cure</p>

          <p className="footer-description">
            A healthcare infrastructure and coordination platform focused
            on helping patients navigate their healthcare journey.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#how-it-works">Patient Journey</a>
          <a href="#specialties">Medical Specialties</a>
          <a href="#why-us">Why Choose Us</a>
        </div>

        <div className="footer-links">
          <h3>Patient Support</h3>
          <a href="#patient-care">Our Approach</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AVYJNR Health Technologies India
          Private Limited. All rights reserved.
        </p>
        <p>Care Before Cure</p>
      </div>
    </footer>
  );
}

export default Footer;
