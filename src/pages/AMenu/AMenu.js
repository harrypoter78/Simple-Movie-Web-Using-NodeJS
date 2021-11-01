import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class AMenu extends Component {
  render() {
    return (
      <div className="py-28">
        <Helmet>
          <title>A Menu</title>
        </Helmet>
        <div className="font-weight-bold h-20">
          <p>This is A Page</p>
        </div>
      </div>
    );
  }
}

export default AMenu;
