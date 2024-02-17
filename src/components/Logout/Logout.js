import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
const { baseAuthURL, API_KEY } = require("../../Config");

class Logout extends Component {
  componentDidMount() {
    Axios.delete(baseAuthURL + `session?api_key=${API_KEY}`, {
      data: {
        session_id: this.props.session_id,
      }
    }).then((res) => {
      this.props.dispatch({
        type: "DELETE_SESSION_ID",
      });
      this.props.dispatch({
        type: "DELETE_USERNAME",
      });
      this.props.history.push("/login");
    });
  }
  render() {
    return (
      <div className="py-24 flex place-content-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session_id: state.session_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
