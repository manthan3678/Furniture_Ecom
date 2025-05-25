import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
const ShopContent = ({ item }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6  card-div text-center mt-3 mb-3">
        <img
          src={item.image}
          className="card-img-top"
          style={{ height: "12rem", width: "17rem" }}
          alt="..."
        />

        <p className="card-text mt-3">{item.title}</p>
        <Link to={"/productDetails"} state={{ productdata: item }}>
          {" "}
          <button className="btn btn-color">Shop Now</button>
        </Link>
      </div>
    </>
  );
};

export default ShopContent;
