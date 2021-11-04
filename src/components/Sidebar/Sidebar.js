import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../Navbar/MenuItems";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    console.log(this.props.username);
    return (
      <div className="absolute top-16 inset-y-0 right-0 h-screen sm:w-1/4 lg:hidden bg-gray-500">
        <div className="flex flex-col">
          {this.props.username && (
            <Link to="/logout">
              <button className="mb-8 px-4 py-2 font-bold w-full text-xs uppercase bg-red-600 hover:bg-red-800">
                Logout
              </button>
            </Link>
          )}
          {/* Login Button */}
          {!this.props.username && (
            <Link to="/login">
              <button className="mb-8 px-4 py-2 font-bold w-full text-xs uppercase bg-green-600 hover:bg-green-800">
                Login
              </button>
            </Link>
          )}

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
}
const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
export default connect(mapStateToProps)(Sidebar);
