import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const HomeContect = ({ products }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6  card-div text-center mt-3 mb-3">
        <img
          src={products.image}
          className="card-img-top"
          style={{ height: "12rem", width: "17rem" }}
          alt="..."
        />

        <p className="card-text mt-3">{products.title}</p>

        <p className="">{products.price}</p>
      </div>
    </>
  );
};

export default HomeContect;
