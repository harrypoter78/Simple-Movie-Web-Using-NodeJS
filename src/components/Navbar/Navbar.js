import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="NavbarItems">
      {/* <ul className={"nav-menu"}> */}
      <div class="btn-group">
        {MenuItems.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.url}>
                <button type="button" className="button">
                  {item.title}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      {/* </ul> */}

      <Link to="/" className="navbar-logo">
        <h4>FE-Assignment</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
