import { Link } from "react-router-dom";
import logo from "/logo-transparent.png";

const NavBar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#1d2d44" }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          <img
            src={logo}
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "transparent",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="navbar-brand fs-5" to="/NKU-Hackathon">
              Home
            </Link>
            <Link className="navbar-brand fs-5" to="/NKU-Hackathon/resources">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
