import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class CMenu extends Component {
  render() {
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
}

export default CMenu;
