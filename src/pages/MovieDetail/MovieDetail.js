import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import { connect } from "react-redux";
const { baseMovieURL, API_KEY, imgURL } = require("../../Config");

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostRatingInput: false,
      DropMenu: false,
      detail: "",
      rating: "",
      ratingState: "",
      // movie_id: "",
      loading: false,
    };
    this.showPostRatingInput = this.showPostRatingInput.bind(this);
    this.showDropMenu = this.showDropMenu.bind(this);
    this.postMovieRating = this.postMovieRating.bind(this);
    this.deleteMovieRating = this.deleteMovieRating.bind(this);
  }

  showPostRatingInput() {
    this.setState({ PostRatingInput: !this.state.PostRatingInput });
  }

  showDropMenu() {
    this.setState({ DropMenu: !this.state.DropMenu });
  }

  getMovieData(movie_id) {
    Axios.get(baseMovieURL + `${movie_id}?api_key=${API_KEY}`).then((res) => {
      this.setState({ detail: res.data });
    });
    if (this.props.session_id) {
      Axios.get(
        baseMovieURL +
          `${movie_id}/account_states?api_key=${API_KEY}&session_id=${this.props.session_id}`
      ).then((res) => {
        this.setState({ ratingState: res.data.rated.value });
      });
    }
  }

  componentDidMount() {
    // this.setState({ movie_id: this.props.match.params.movie_id });
    // const movie_id = this.props.match.params.movie_id;
    this.getMovieData(this.props.movie_id);
  }

  postMovieRating() {
    this.setState({ loading: true });
    Axios.post(
      baseMovieURL +
        `${this.props.movie_id}/rating?api_key=${API_KEY}&session_id=${this.props.session_id}`,
      {
        value: this.state.rating,
      }
    ).then((res) => {
      this.setState({ loading: false });
      this.setState({ rating: res.data });
    });
    this.setState({ ratingState: this.state.rating });
    this.setState({ PostRatingInput: false });
  }

  deleteMovieRating() {
    this.setState({ loading: true });
    Axios.delete(
      baseMovieURL +
        `${this.props.movie_id}/rating?api_key=${API_KEY}&session_id=${this.props.session_id}`
    ).then(() => {
      this.setState({ loading: false });
      if (!this.state.ratingState) {
        alert("Movie has not rated yet.");
      } else {
        this.setState({ ratingState: "" });
      }
    });
  }

  render() {
    if (!this.state.detail)
      return (
        <div className="py-24 flex place-content-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        </div>
      );

    return (
      <div>
        <Helmet>
          <title>{this.state.detail.original_title}</title>
        </Helmet>

        {/* Page Content */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          <div className="px-4 h-72 w-64 lg:h-full lg:w-full mx-auto ">
            <img
              className="w-full h-full"
              src={imgURL + this.state.detail.poster_path}
              alt=""
            />
          </div>
          <div className="col-span-2 text-left pl-0 lg:pl-6">
            <p className="font-bold text-2xl">
              {this.state.detail.original_title}
            </p>
            <p className="font-normal mt-2">
              Status : {this.state.detail.status}
            </p>
            <p className="font-normal text-green-600 mb-2">
              Release Date : {this.state.detail.release_date}
            </p>
            <p className="font-normal text-justify pt-2">
              {this.state.detail.overview}
            </p>
            <p className="font-normal mt-2">
              Popularity : {this.state.detail.popularity}
            </p>

            <p className="font-normal mt-2">
              IMDB Rating : {this.state.detail.vote_average}
            </p>
            <p className="font-normal mt-2">
              Vote Count : {this.state.detail.vote_count}
            </p>

            {this.props.session_id && (
              <ul className="flex list-none font-normal pt-2">
                <li className="mr-2">
                  {!this.state.ratingState ? (
                    <p>Your Rating : No Rating</p>
                  ) : (
                    <p>Your Rating : {this.state.ratingState}</p>
                  )}
                </li>
                {this.state.loading ? (
                  <div className="flex place-content-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-500"></div>
                  </div>
                ) : (
                  <div className="flex">
                    <li>
                      <button onClick={this.showPostRatingInput}>
                        {this.state.PostRatingInput ? (
                          <i className="fas fa-caret-left fa-lg text-green-600"></i>
                        ) : (
                          <i className="fas fa-plus text-green-600"></i>
                        )}
                      </button>
                    </li>

                    <li>
                      {/* Hidden Menu */}
                      <div className="block">
                        {this.state.PostRatingInput && (
                          <div className="flex items-center">
                            <input
                              className="shadow appearance-none border rounded w-12 text-gray-700 leading-tight text-center"
                              id="movie_rating"
                              type="text"
                              onChange={(event) =>
                                this.setState({ rating: event.target.value })
                              }
                            ></input>

                            <button
                              className="px-2"
                              onClick={this.postMovieRating}
                            >
                              <i className="fas fa-plus text-green-600"></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </li>

                    {this.props.session_id && (
                      <li>
                        <button
                          className="ml-2"
                          onClick={this.deleteMovieRating}
                        >
                          <i className="fas fa-minus text-red-600"></i>
                        </button>
                      </li>
                    )}
                  </div>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="flex mt-14 items-center">
          <div className="w-28 text-left lg:text-center">SEND TO</div>
          <div className="w-full">
            <div className="divide-y divide-black divide-solid">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-2 text-left lg:hidden">
            <button
              onClick={() => {
                this.showDropMenu();
              }}
            >
              {this.state.DropMenu ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}
            </button>
          </div>
        </div>

        {/* Normal Menu */}
        <div className="hidden lg:block">{DropMenu()}</div>

        {/* Hidden Menu */}
        <div className="block lg:hidden">
          {this.state.DropMenu ? DropMenu() : ""}
        </div>
      </div>
    );
  }
}

function DropMenu() {
  return (
    <div className="flex mt-2 items-center">
      <div className="w-28"></div>
      <div className="w-full text-left">
        <i className="px-5 fas fa-link fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Link</p>
        </i>
        <i className="px-5 fas fa-envelope fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Email</p>
        </i>
        <i className="px-5 fab fa-facebook-square fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Facebook</p>
        </i>
        <i className="px-5 fab fa-twitter-square fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Twitter</p>
        </i>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movie_id: state.movie_id,
    session_id: state.session_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
