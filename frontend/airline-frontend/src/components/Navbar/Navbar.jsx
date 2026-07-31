import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className="navbar">
    {/* logo section */}
    <div className="logo">
        <h2> SkyReserve</h2>
    </div>
    {/* navigation link */}
    <div className="nav-links">
        <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    {/* Autentication buttons */}
    <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
    </div>
   </nav>
  );
};

export default Navbar;