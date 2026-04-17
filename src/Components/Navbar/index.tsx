import "./Navbar.css";
import logo from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Tantalizers Logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><Link to="/order">Order now</Link></li>

        {/* DROPDOWN */}
        <li className="dropdown-parent">
          <div
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <li><Link to="/About">About </Link></li>
          </div>

         
        </li>

        <li><Link to="/franchise">Franchise</Link></li>
        <li><Link to="/outlets">Outlets</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Mobile Sign in */}
        <li className="mobile-signin">
          <button className="signin-btn">Sign in</button>
        </li>

      </ul>

      {/* Desktop Sign in */}
      <button className="signin-btn desktop-only">Sign in</button>

    </nav>
  );
};

export default Navbar;