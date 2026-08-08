import { Link } from "react-router-dom";
import "../styles/home.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo section */}
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>SkyReserve</h2>
        </Link>
      </div>

      {/* navigation link */}
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flights">Flights</Link>
          </li>
          <li>
            <Link to="/">Offers</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Authentication buttons */}
      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;