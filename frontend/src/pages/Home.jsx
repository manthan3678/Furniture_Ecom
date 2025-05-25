import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../App.css";
import Homeimg from "../assets/Images/loginimg.png";
import { SlCallOut } from "react-icons/sl";
import { BsBoxSeam, BsTypeH1 } from "react-icons/bs";
import { PiPottedPlant } from "react-icons/pi";
import HomeContect from "./HomeContect";
import Shocase from "../components/Layout/Shocase";
// import hompagedata from "../../homepage_api.json";
import axios from "axios";
import { useAuth } from "../context/Authorization";

const Home = () => {
  const [hompagedata, setHompageData] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/homepage")
      .then((result) => {
        // console.log("we have received the data");
        // console.log(result.data[0]);
        setHompageData(result.data[0]);
        setIsloading(false);
        console.log(JSON.stringify(auth));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <h1>loading</h1>
      ) : (
        <Layout>
          <div
            className="container  w-100 main-container flex
        "
          >
            <div className="row w-100 ">
              <div className="col-sm-12 col-lg-6">
                {/* Heading section */}
                <h2 className="p-2">Designed for Comfort. Built for Life</h2>
                <h5 className="p-2">
                  Elevate Your Space with Timeless Furniture Crafted to
                  Perfection. <br />
                  {/* {hompagedata.banner.no_of_furniture}+ Frunitures */}
                  <br /> <br />
                  Crafted with care, designed for your comfort. <br />
                  {/* {hompagedata.banner.no_of_customer}+ Customers */}
                </h5>
                <button className="btn btn-color m-2">Shop Now</button>
              </div>
              <div className=" image-home col-sm-12 col-lg-6  flex">
                {/* Images  */}
                <img src={Homeimg} style={{ width: "75%" }} alt="" />
              </div>
            </div>
          </div>
          {/* ************************* Card Section ********************* */}
          <div className="container-fluid mt-5 mb-5">
            {/* Here we Have integrated with API Using the Components */}
            <div className="row flex">
              {hompagedata.best_selling.map((product, i) => {
                return <HomeContect products={product} key={i} />;
              })}
            </div>
          </div>
          {/* *********************** About Us **************************** */}
          <div className="container text-center mt-5 mb-5 shadow p-3 mb-5 bg-body-tertiary">
            <h2 className="">About Us</h2>
            <p className="mb-5 mt-3">
              Crafting premium furniture that transforms spaces, with unmatched
              quality, service, and style.
            </p>
            <div className="row">
              <div className="col-lg-4 col-xs-12 ">
                <span className=" ab-icon fs-2">
                  <PiPottedPlant />
                </span>
                <h6 className="mt-3">Large Assorstment</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, ducimus.
                </p>
              </div>
              <div className="col-lg-4 col-xs-12">
                <span className="ab-icon fs-2">
                  <BsBoxSeam />
                </span>
                <h6 className="mt-3">free & fast shippment</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, ducimus.
                </p>
              </div>
              <div className="col-lg-4 col-xs-12">
                <span className="ab-icon fs-2">
                  <SlCallOut />
                </span>
                <h6 className="mt-3">24/7 Support</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, ducimus.
                </p>
              </div>
            </div>
          </div>
          {/* ######################### Product Or Showcase details ###################### */}
          <h2 className="text-center mt-5 mb-2">Categories</h2>
          <p className="text-center mb-3 ">
            Great furniture is the foundation of a beautiful home.
          </p>
          <div className="row flex mb-5 showcase">
            {hompagedata.products.map((products, index) => {
              return <Shocase Allproducts={products} key={index} />;
            })}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Home;
