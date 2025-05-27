import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 mt-3 shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className="text-decoration-none ">
          <h2 className="text-dark">Maan</h2>
        </Link>
        {/* hamburger is here */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav=item">
              <NavLink className="text-decoration-none" to="/">
                <a className="nav-link " aria-current="page">
                  Home
                </a>
              </NavLink>
            </li>

            <li className="nav=item">
              <NavLink className="text-decoration-none" to="/products">
                <a className="nav-link " aria-current="page">
                  Products
                </a>
              </NavLink>
            </li>

            <li className="nav=item">
              <NavLink className="text-decoration-none" to="/orders">
                <a className="nav-link " aria-current="page">
                  Orders
                </a>
              </NavLink>
            </li>

            <li className="nav=item">
              <NavLink className="text-decoration-none" to="/contact">
                <a className="nav-link " aria-current="page">
                  Contact-us
                </a>
              </NavLink>
            </li>
            <li className="nav=item">
              <NavLink className="text-decoration-none" to="/cart">
                <a className="nav-link btn btn-color p-2" aria-current="page">
                  Cart
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
