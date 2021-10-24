import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../Navbar/MenuItems";

function Sidebar() {
  return (
    <div className="absolute top-16 inset-y-0 right-0 h-screen sm:w-1/4 lg:hidden bg-gray-500">
      <div className="flex flex-col">
        {/* Login Button */}
        <Link to="/login">
          <button className="mb-8 px-4 py-2 font-bold w-full text-xs uppercase bg-green-600 hover:bg-green-800">
            Login
          </button>
        </Link>

        {MenuItems.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.url}>
                <button className="px-4 py-2 font-bold w-full text-xs uppercase hover:bg-green-600">
                  {item.title}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
