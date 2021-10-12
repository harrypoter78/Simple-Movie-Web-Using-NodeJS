import React from "react";
import { Helmet } from "react-helmet";
// import './AMenu.css';

function AMenu() {
  return (
    <div>
      <Helmet>
        <title>A Menu</title>
      </Helmet>
      <div className="font-weight-bold">
        <p>This is A Page</p>
      </div>
    </div>
  );
}

export default AMenu;
