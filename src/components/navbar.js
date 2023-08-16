import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Break Time</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto to push items to the right */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-house-door"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Timer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
