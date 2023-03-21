import React from "react";
import notFoundIcon from "@icons/404.svg";
import "@styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundIcon} alt="" />
      <p className="not-found-text">Pagina no encontrada</p>
      <h2>
        Regresa a la pagina de{" "}
        <Link className="not-found-link" to={"/"}>
          Inicio
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
