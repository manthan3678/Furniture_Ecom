import React, { useEffect, useState } from "react";
import Homeimg from "../../assets/Images/loginimg.png";
import "../../App.css";

const ShopLayout = ({ shopdata }) => {
  return (
    <>
      <div
        className="container  w-100 main-container flex
        "
      >
        <div className="row w-100 ">
          <div className="col-sm-12 col-lg-6">
            {/* Heading section */}
            <h2 className="p-2">{shopdata.banner.title}</h2> <br />
            <h4 className="p-2">
              {" "}
              Crafted with care, designed for your comfort.
            </h4>
            <button className="btn btn-color m-2">Shop Now</button>
          </div>
          <div className=" image-home col-sm-12 col-lg-6  flex">
            {/* Images  */}
            <img src={shopdata.banner.image} style={{ width: "75%" }} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
