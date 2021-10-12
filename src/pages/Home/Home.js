import React from "react";
import { Helmet } from "react-helmet";
// import './Home.css';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="font-weight-bold">
        <p>This is Home Page</p>
      </div>
    </div>
  );
}

export default Home;
