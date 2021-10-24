import React from "react";
import { Helmet } from "react-helmet";
// import './BMenu.css';

function BMenu() {
  return (
    <div className="py-28">
      <Helmet>
        <title>B Menu</title>
      </Helmet>
      <div className="font-weight-bold h-20">
        <p>This is B Page</p>
      </div>
    </div>
  );
}

export default BMenu;
