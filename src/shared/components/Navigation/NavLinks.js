import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={classes.NavLinks}>
      <li>
        <NavLink to="/" exact activeClassName={classes.NavLinkActive}>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" activeClassName={classes.NavLinkActive}>
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new" activeClassName={classes.NavLinkActive}>
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" activeClassName={classes.NavLinkActive}>
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
