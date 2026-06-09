import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

<div className="footer-content">

  <div className="footer-column">
    <h4>Elementum</h4>
  </div>

  <div className="footer-column">
    <h4>Company</h4>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>

  <div className="footer-column">
    <h4>Social</h4>
    <a href="#">Instagram</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
  </div>

  <div className="footer-column">
    <h4>Contact</h4>
    <p>info@elementum.com</p>
    <p>+91 9876543210</p>
  </div>

</div>

    </footer>
  );
}

export default Footer;