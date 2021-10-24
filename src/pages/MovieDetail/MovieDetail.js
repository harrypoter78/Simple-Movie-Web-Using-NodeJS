import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import Axios from "axios";
const { baseURL, API_KEY, session_id, imgURL } = require("../../Config");

function MovieDetail() {
  const [isPostRatingInput, setisPostRatingInput] = useState(false);

  const showPostRatingInput = () => {
    isPostRatingInput
      ? setisPostRatingInput(false)
      : setisPostRatingInput(true);
  };

  const [isDropMenuOpen, setisDropMenuOpen] = useState(false);

  const showDropMenu = () => {
    isDropMenuOpen ? setisDropMenuOpen(false) : setisDropMenuOpen(true);
  };

  const { movie_id } = useParams({ movie_id: "string" });
  const [detail, setdetail] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingState, setRatingState] = useState([]);

  useEffect(() => {
    Axios.get(baseURL + `${movie_id}` + API_KEY).then((res) => {
      setdetail(res.data);
    });
  }, [movie_id]);

  const postMovieRating = () => {
    Axios.post(baseURL + `${movie_id}/rating` + API_KEY + session_id, {
      value: rating,
    }).then((res) => {
      alert("Rating posted!");
      setRating(res.data);
      window.location.reload();
    });
  };

  useEffect(() => {
    Axios.get(
      baseURL + `${movie_id}/account_states` + API_KEY + session_id
    ).then((res) => {
      setRatingState(res.data.rated.value);
    });
  }, [movie_id]);

  const deleteMovieRating = () => {
    Axios.delete(baseURL + `${movie_id}/rating` + API_KEY + session_id).then(
      () => {
        if (!ratingState) {
          alert("Movies are not rated yet.");
        } else {
          alert("Rating deleted!");
          setRating(null);
          window.location.reload();
        }
      }
    );
  };

  return (
    <div>
      <Helmet>
        <title>{detail.original_title}</title>
      </Helmet>

      {/* Page Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
        <div className="px-4 h-72 w-64 lg:h-full lg:w-full mx-auto ">
          <img
            className="w-full h-full"
            src={imgURL + detail.poster_path}
            alt=""
          />
        </div>
        <div className="col-span-2 text-left pl-0 lg:pl-6">
          <p className="font-bold text-2xl">{detail.original_title}</p>
          <p className="font-normal text-green-600 py-2">
            Release Date : {detail.release_date}
          </p>
          <p className="font-normal text-justify pt-2">{detail.overview}</p>

          <ul className="flex list-none font-normal pt-2">
            <li className="mr-2">
              {" "}
              {!ratingState ? (
                <p>Rating : No Rating</p>
              ) : (
                <p>Rating : {ratingState}</p>
              )}
            </li>
            <li>
              {" "}
              <button
                onClick={() => {
                  showPostRatingInput();
                }}
              >
                {isPostRatingInput ? (
                  <i class="fas fa-caret-left fa-lg text-green-600"></i>
                ) : (
                  <i class="fas fa-plus text-green-600"></i>
                )}
              </button>
            </li>
            <li>
              {/* Hidden Menu */}
              <div className="block">
                {isPostRatingInput ? (
                  <div className="flex items-center">
                    <li>
                      <input
                        class="shadow appearance-none border rounded w-12 text-gray-700 leading-tight text-center"
                        id="movie_rating"
                        type="text"
                        onChange={(event) => setRating(event.target.value)}
                      ></input>
                    </li>
                    <li>
                      <button className="px-2" onClick={postMovieRating}>
                        <i class="fas fa-plus text-green-600"></i>
                      </button>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>

            <li>
              <button className="ml-2" onClick={deleteMovieRating}>
                <i class="fas fa-minus text-red-600"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex mt-14 items-center">
        <div className="w-28 text-left lg:text-center">SEND TO</div>
        <div className="w-full">
          <div class="divide-y divide-black divide-solid">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="w-2 text-left lg:hidden">
          <button
            onClick={() => {
              showDropMenu();
            }}
          >
            {isDropMenuOpen ? (
              <i class="fas fa-caret-up"></i>
            ) : (
              <i class="fas fa-caret-down"></i>
            )}
          </button>
        </div>
      </div>

      {/* Normal Menu */}
      <div className="hidden lg:block">{DropMenu()}</div>

      {/* Hidden Menu */}
      <div className="block lg:hidden">{isDropMenuOpen ? DropMenu() : ""}</div>
    </div>
  );
}

function DropMenu() {
  return (
    <div className="flex mt-2 items-center">
      <div className="w-28"></div>
      <div className="w-full text-left">
        <i class="px-5 fas fa-link fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Link</p>
        </i>
        <i class="px-5 fas fa-envelope fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Email</p>
        </i>
        <i class="px-5 fab fa-facebook-square fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Facebook</p>
        </i>
        <i class="px-5 fab fa-twitter-square fa-lg text-center">
          <p className="mt-2 font-normal text-sm">Twitter</p>
        </i>
      </div>
    </div>
  );
}

export default MovieDetail;
