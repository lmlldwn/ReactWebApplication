import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li className="navbar-home nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-joke nav-link">
            <Link to="/game">Game</Link>
          </li>
          <li className="navbar-joke nav-link">
            <Link to="/joke">Joke</Link>
          </li>
          <li className="navbar-about nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;