import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { to, text, active } = props;
  
  return (
    <li class="nav-item ">
      <Link className={`nav-link ${active && 'active'}`} to={to}>{text}</Link>
    </li>
    )
   
};

export default NavLink;

