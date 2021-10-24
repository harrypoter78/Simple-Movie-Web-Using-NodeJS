import React from "react";
import { Helmet } from "react-helmet";

function Login() {
  return (
    <div className="py-28">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="font-weight-bold h-20">
        <p>This is Login Page</p>
      </div>
    </div>
  );
}

export default Login;
