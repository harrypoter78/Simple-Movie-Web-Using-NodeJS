import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import { connect } from "react-redux";
const { API_KEY } = require("../../Config");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdb_id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.get(
      `https://api.themoviedb.org/3/find/${this.state.imdb_id}${API_KEY}&external_source=imdb_id`
    ).then((res) => {
      this.props.dispatch({
        type: "UPDATE_MOVIE_ID",
        payload: res.data.movie_results[0].id,
      });
      this.props.history.push(`/movie-detail/${res.data.movie_results[0].id}`);
    });
  }

  handleChange(e) {
    this.setState({ imdb_id: e.target.value });
  }

  render() {
    return (
      <div className="py-28">
        <Helmet>
          <title>Home</title>
        </Helmet>
        {/* Page Content */}
        <form
          className="w-40 sm:w-60 md:w-1/2 bg-white flex items-center mx-auto rounded-full shadow-xl"
          onSubmit={this.handleSubmit}
        >
          <input
            className="text-center rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search IMDB ID"
            onChange={this.handleChange}
          ></input>
          <div className="p-4">
            <button className="bg-green-600 text-white rounded-full p-2 hover:bg-green-800 focus:outline-none w-12 h-12 flex items-center justify-center">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie_id: state.movie_id,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
