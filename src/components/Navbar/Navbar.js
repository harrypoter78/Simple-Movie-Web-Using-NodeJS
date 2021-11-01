import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SideBarOpen: false,
    };

    this.showSideBar = this.showSideBar.bind(this);
  }

  showSideBar() {
    this.state.SideBarOpen
      ? this.setState({ SideBarOpen: false })
      : this.setState({ SideBarOpen: true });
  }
  render() {
    return (
      <nav className="sticky top-0 flex bg-gray-400 justify-between items-center h-16 text-white w-full">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="ml-12 mr-12 text-lg font-bold uppercase">
            <p>FE-Assignment</p>
          </Link>

          {/* Navbar Menu */}
          <div className="hidden flex items-center lg:flex lg:flex-row">
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

        <div className="flex">
          {/* Loged IN Username */}
          <div className="px-6 flex items-center text-lg">
            <p className="font-normal pr-2 mb-4">Welcome</p>
            <div className="divide-y-4 divide-green-500">
              <div className="font-bold">{this.props.username}</div>
              <div></div>
            </div>
          </div>

          <div className="flex items-center">
            {/* Login Button */}
            <Link to="/login">
              <button className="hidden lg:flex lg:flex-row px-5 py-2 mr-12 font-bold text-sm uppercase bg-green-600 hover:bg-green-800">
                Change Name
              </button>
            </Link>
            <button onClick={this.showSideBar} className="mr-12 lg:hidden">
              {this.state.SideBarOpen ? (
                <i className="far fa-times-circle fa-lg"></i>
              ) : (
                <i className="fas fa-bars fa-lg"></i>
              )}
            </button>
          </div>

          {this.state.SideBarOpen ? <Sidebar /> : ""}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
export default connect(mapStateToProps)(Navbar);
