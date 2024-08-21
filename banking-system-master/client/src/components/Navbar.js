import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";  // Import Font Awesome icon

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="navbar sticky-top navbar-expand-lg" style={{ background: "linear-gradient(to right, #2c3e50, #4ca1af)", color: "white" }}>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo01"
        aria-expanded={navbarOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${navbarOpen ? ' show' : ''}`} id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center" }}>
          <FaUniversity style={{ marginRight: "20px", marginLeft: "20px" }} />
          Banking System
        </Link>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/customers">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactions">
              Transactions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              New Customer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
