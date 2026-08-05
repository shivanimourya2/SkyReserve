import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Footer =() => {
    return (
        <footer className="footer">
            <div className="footer-logo">
              <h2>SkyReserve</h2>
              <p>
                Book domenstic and international flights with confidence.
              </p>
            </div>
            <div className="footer-links">
                <div>
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">flights</a>
                    <a href="#">Contact</a>
                </div>
                <div>
                    <h3>Support</h3>
                    <a href ="#">FAQ</a>
                    <a href="#">Privacy</a>
                     <a href="#">Terms</a>

                </div>
            </div>
             <div className="socials">

        <FaFacebook />

        <FaInstagram />

        <FaLinkedin />

      </div>
        <hr />

      <p className="copyright">
        © 2026 SkyReserve. All Rights Reserved.
      </p>
        </footer>
    )
}

export default Footer;