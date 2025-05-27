import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import ShopLayout from "../components/shopComponent/ShopLayout";
import ShopContent from "../components/shopComponent/ShopContent";
import "../App.css";

const Shop = () => {
  const [shopdata, setShopData] = useState({});
  const [isloading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/shop")
  //     .then((result) => {
  //       console.log("we have received the data");
  //       // console.log(result.data[0]);
  //       setShopData(result.data[0]);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <>
      {" "}
      {isloading ? (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Layout>
          <ShopLayout shopdata={shopdata} />
          <div className="container-fluid mt-5 mb-5">
            {/* Here we Have integrated with API Using the Components */}
            <div className="row flex">
              {shopdata.products.map((items, i) => {
                return <ShopContent item={items} key={i} />;
              })}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Shop;
