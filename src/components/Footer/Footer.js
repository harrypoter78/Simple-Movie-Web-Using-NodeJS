import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-7">
            <h1>FE-Assignment</h1>
          </div>
          {/* Column2 */}
          <div className="col-5">
            <h4 className="text-left">More Information</h4>
            <ui className="list-unstyled text-left">
              <li>Front End</li>
              <li>ReactJS Assingment</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} - Muhamad Rizky Firmansah
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
