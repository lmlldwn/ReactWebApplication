import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li className="navbar-home">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-content">
            <Link to="/content">Content</Link>
          </li>
          <li className="navbar-about">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;