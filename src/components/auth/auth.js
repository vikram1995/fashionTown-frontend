import React from "react";
import { DisplayText } from "./styledComponent";
import { Link } from "react-router-dom";
function auth() {
  return (
    <div>
      <Link to={`signIn`}>
        <DisplayText>LOGIN</DisplayText>
      </Link>
    </div>
  );
}

export default auth;
