import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar-container">
      <div className="nav__logo">
        <Link to="/">My Vertical World </Link>
      </div>

      <ul className="navbar__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-route">Add route</Link>
        </li>
        <li>
          <Link to="/login">Sign up</Link>
        </li>
        <li>{user && <p>Logged user: {user.username}</p>}</li>
        {user && <button onClick={logoutUser}>Log out</button>}
      </ul>
    </nav>
  );
};

export default Navbar;