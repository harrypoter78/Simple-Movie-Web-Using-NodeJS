import React from "react";
import { Helmet } from "react-helmet";

function CMenu() {
  return (
    <div className="py-28">
      <Helmet>
        <title>C Menu</title>
      </Helmet>
      <div className="font-weight-bold h-20">
        <p>This is C Page</p>
      </div>
    </div>
  );
}

export default CMenu;
