import React from "react";
import "../Layout/Flip.css";
import { Link } from "react-router-dom";

const Shocase = ({ Allproducts }) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12 ">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="card  flip-card-front">
              <img
                src={Allproducts.image}
                className="card-img-top"
                alt="..."
                height={"100%"}
              />
            </div>
            <div className="flip-card-back">
              <h3 className="card-text text-center mt-5 fs-5">
                {Allproducts.title}
              </h3>
              <h6 className="text-center mt-5">{Allproducts.desc}</h6>
              <Link to={"/productDetails"} state={{ productdata: Allproducts }}>
                {" "}
                <button className="btn btn-color">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shocase;
