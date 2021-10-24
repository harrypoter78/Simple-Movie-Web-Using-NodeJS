import React from "react";
import { Helmet } from "react-helmet";

function DMenu() {
  return (
    <div className="py-28">
      <Helmet>
        <title>D Menu</title>
      </Helmet>
      <div className="font-weight-bold h-20">
        <p>This is D Page</p>
      </div>
    </div>
  );
}

export default DMenu;
