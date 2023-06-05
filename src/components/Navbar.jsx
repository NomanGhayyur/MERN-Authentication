import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="#">
              Fine Art
            </NavLink>
            <NavLink
              to="/dashboard"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
              <li className="fa fa-user-plus me-2"></li> Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <li className="fa fa-sign-in me-2"></li> Login
            </NavLink>

            <NavLink
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <li className="fa fa-user-plus me-2"></li> Register
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
