import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { useAuth } from "../../context/Authorization";
const Header = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);
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
            {/* !!!!!!!!!! Auth !!!!!!!! */}
            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <div>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/login">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </div>
              </>
            )}
            {/* Auth END !!!!!!!!!!!! */}
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
