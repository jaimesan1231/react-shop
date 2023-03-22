import React from "react";
import notFoundIcon from "@icons/404.svg";
import "@styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundIcon} alt="" />
      <p className="not-found-text">Page not Found</p>
      <h2>
        Back to
        <Link className="not-found-link" to={"/"}>
          Home
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
