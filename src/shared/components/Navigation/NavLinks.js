import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.NavLinks}>
      <li>
        <NavLink to="/" exact activeClassName={classes.NavLinkActive}>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places" activeClassName={classes.NavLinkActive}>
            My Places
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new" activeClassName={classes.NavLinkActive}>
            Add Place
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth" activeClassName={classes.NavLinkActive}>
            Authenticate
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
