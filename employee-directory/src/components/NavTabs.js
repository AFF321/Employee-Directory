import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
 
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
          About
        
      </li>
      <li className="nav-item">
          Blog
      </li>
      <li className="nav-item">
          Contact
        
      </li>
    </ul>
  );
}

export default NavTabs;
