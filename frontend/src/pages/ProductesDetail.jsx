import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import "../App.css";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useAuth } from "../context/Authorization";
const ProductesDetail = () => {
  const [qnty, setQunty] = useState(1);
  const { state } = useLocation();
  const { productdata } = state;
  const [cart, setCart] = useCart();
  const [auth] = useAuth();

  // console.log(JSON.stringify(productdata));
  const [showAlert, setShowAlert] = useState(false);
  productdata.quantity = qnty;
  console.log("user ID", auth?.user);
  console.log(auth?.user?.id);
  productdata.id = auth?.user?.id;
  const addCart = () => {
    // first ata hai url fir kya data send krna rehta hai vo dalte hai
    console.log("data sent", productdata);
    axios
      .post("http://localhost:5000/api/cart", productdata, {
        headers: {
          Authorization: auth?.user,
        },
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setShowAlert(true);
        } else {
          setShowAlert(false);
          console.log("Not working");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setCart([...cart, productdata]);
  };

  // console.log(qnty);
  return (
    <>
      <Layout>
        <div className="container">
          <div>
            {showAlert ? (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Added</strong> to cart.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                />
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="row">
            {/* product-detals */}
            <div className="col-6 product-detals">
              <h2 className="p-3">{productdata.title}</h2>
              <h5 className="p-3">{productdata.desc}</h5>
              <h4 className="p-3">₹ {productdata.price}</h4>
            </div>
            {/* product-img */}
            <div className="col-6 product-img flex">
              <img src={productdata.image} style={{ width: "75%" }} alt="" />
            </div>
          </div>
        </div>
        {/* Counter section */}
        <div className="container ">
          {/* #########counter section######## */}
          <div className="d-flex p-3">
            <div className="btn1">
              <button
                className="btn btn-color"
                onClick={() => setQunty(qnty - 1)}
              >
                -
              </button>
            </div>
            <div className="btn = pl-2">Qnty : {qnty}</div>
            <div className="btn2">
              <button
                className="btn btn-color"
                onClick={() => setQunty(qnty + 1)}
              >
                +
              </button>
            </div>
          </div>
          {/* ******buttons fro buyin and adding******** */}
          <div className="row">
            <div className="col-6">
              <button className="btn btn-color m-3" onClick={() => addCart()}>
                Add To Cart
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-color m-3">Buy Now</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductesDetail;
