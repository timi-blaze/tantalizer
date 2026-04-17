import "./Footer.css"
import logo from "../../assets/favicon.png"
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6"
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">

          <img src={logo} alt="logo" className="footer-logo"/>

          <p className="footer-tag">
            Every bite, a promise kept
          </p>

          <h4>Connect with us:</h4>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>

          <p className="copyright">
            2026 | All rights reserved by Tantalizers
          </p>

        </div>


        {/* MIDDLE SECTION */}
        <div className="footer-middle">

          <h3>Useful Links</h3>

          <ul>
            <li>Career</li>
            <li>Franchise</li>
            <li>Outlets</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>

        </div>


        {/* RIGHT SECTION */}
        <div className="footer-right">

          <h3>Contact Info</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon"/>
            <p>Makay Plaza, 21 Road, I Close, Festac Town, Lagos</p>
          </div>

          <div className="contact-item">
            <MdEmail className="icon"/>
            <p>info@tantalizersng.com</p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="icon"/>
            <p>+234 (0) 7015999154  +234 (0) 7015999113</p>
          </div>

          <div className="contact-item">
            <FaClock className="icon"/>
            <p>Mon - Sun 8:00AM - 9:30PM</p>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer