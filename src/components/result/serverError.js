import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import links from "../../config/routeLinks";
function ServerError() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Link to={links.home}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default ServerError;
