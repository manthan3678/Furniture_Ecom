import React, { useEffect, useState } from "react";
import HomeContect from "./HomeContect";
import Shocase from "../components/Layout/Shocase";
import axios from "axios";
import "../App.css";
import Layout from "../components/Layout/Layout";
import ShopContent from "../components/shopComponent/ShopContent";

const Product = () => {
  const [hompagedata, setHompageData] = useState({});
  const [shopdata, setShopData] = useState({});
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/homepage")
      .then((result) => {
        // console.log("we have received the data");
        // console.log(result.data[0]);
        setHompageData(result.data[0]);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //
  return (
    <>
      {isloading ? (
        <div className="loader"></div>
      ) : (
        <Layout>
          {/* homepage is here  */}
          <div className="container-fluid mt-5 mb-5">
            {/* Here we Have integrated with API Using the Components */}
            <div className="row flex">
              {hompagedata.best_selling.map((product, i) => {
                return <HomeContect products={product} key={i} />;
              })}
            </div>
          </div>
          {/* ALL Products of Home Page is here */}
          <div className="row flex mb-5 showcase">
            {hompagedata.products.map((products, index) => {
              return <Shocase Allproducts={products} key={index} />;
            })}
          </div>
          {/* Shop Page Data Is here */}
          {/* <div className="container-fluid mt-5 mb-5"> */}
          {/* Here we Have integrated with API Using the Components */}
          {/* <div className="row flex">
              {shopdata.products.map((items, i) => {
                return <ShopContent item={items} key={i} />;
              })}
            </div>
          </div> */}
        </Layout>
      )}
    </>
  );
};

export default Product;
