import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import Axios from "axios";
const { baseAuthURL, API_KEY } = require("../../Config");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      request_token: "",
      request_token_login: "",
      error: "",
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    Axios.get(baseAuthURL + `token/new?api_key=${API_KEY}`).then((res) => {
      this.setState({ request_token: res.data.request_token });
      Axios.post(baseAuthURL + `token/validate_with_login?api_key=${API_KEY}`, {
        username: this.state.username,
        password: this.state.password,
        request_token: this.state.request_token,
      })
        .then((res) => {
          console.log(res);
          this.setState({ request_token_login: res.data.request_token });
          Axios.post(baseAuthURL + `session/new?api_key=${API_KEY}`, {
            request_token: this.state.request_token_login,
          }).then((res) => {
            this.props.dispatch({
              type: "ADD_SESSION_ID",
              payload: res.data.session_id,
            });
            this.props.dispatch({
              type: "UPDATE_USERNAME",
              payload: this.state.username,
            });
            this.setState({ loading: false });
            this.props.history.push("/");
          });
        })
        .catch((error) => {
          this.setState({ error: error.response.data.status_message });
          this.setState({ loading: false });
        });
    });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="flex py-16 place-content-center">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <form className="w-full max-w-sm pt-2" onSubmit={this.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter your username..."
                onChange={this.handleUsernameChange}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-password"
                type="password"
                placeholder="Enter your password..."
                onChange={this.handlePasswordChange}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              {this.state.loading ? (
                <div className="flex place-content-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                </div>
              ) : (
                <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              )}
              <p className="text-sm mt-4">{this.state.error}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapDispatchToProps)(Login);
