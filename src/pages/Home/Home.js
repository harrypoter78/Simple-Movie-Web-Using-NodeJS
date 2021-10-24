import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const { API_KEY } = require("../../Config");

function Home() {
  const [state, setState] = useState([]);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(
      `https://api.themoviedb.org/3/find/${state}${API_KEY}&external_source=imdb_id`
    ).then((res) => {
      history.push(`/movie-detail/${res.data.movie_results[0].id}`);
    });
  };

  return (
    <div className="py-28">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Page Content */}
      <form
        className="w-40 sm:w-60 md:w-1/2 bg-white flex items-center mx-auto rounded-full shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          className="text-center rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search IMDB ID"
          onChange={(event) => setState(event.target.value)}
        ></input>
        <div className="p-4">
          <button className="bg-green-600 text-white rounded-full p-2 hover:bg-green-800 focus:outline-none w-12 h-12 flex items-center justify-center">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
