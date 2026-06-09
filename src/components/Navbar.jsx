import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className="menu">☰</div>
    </nav>
  );
}

export default Navbar;