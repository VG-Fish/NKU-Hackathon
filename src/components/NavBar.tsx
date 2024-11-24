import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          <b>Navbar</b>
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
