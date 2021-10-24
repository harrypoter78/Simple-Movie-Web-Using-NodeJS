import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const showSideBar = () => {
    isSideBarOpen ? setisSideBarOpen(false) : setisSideBarOpen(true);
  };

  return (
    <nav className="sticky top-0 flex bg-gray-400 justify-between items-center h-16 text-white w-full">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="ml-12 mr-12 text-lg font-bold uppercase">
          <p>FE-Assignment</p>
        </Link>

        {/* Navbar Menu */}
        <div className="hidden lg:flex lg:flex-row">
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.url}>
                  <button className="px-2 xl:px-4 py-2 font-bold m-auto text-sm uppercase hover:text-green-600">
                    {item.title}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Login Button */}
      <Link to="/login">
        <button className="hidden lg:flex lg:flex-row px-5 py-2 mr-12 font-bold text-sm uppercase bg-green-600 hover:bg-green-800">
          Login
        </button>
      </Link>

      <button
        onClick={() => {
          showSideBar();
        }}
        className="mr-12 lg:hidden"
      >
        {isSideBarOpen ? (
          <i class="far fa-times-circle fa-lg"></i>
        ) : (
          <i class="fas fa-bars fa-lg"></i>
        )}
      </button>
      {isSideBarOpen ? Sidebar() : ""}
    </nav>
  );
}

export default Navbar;
