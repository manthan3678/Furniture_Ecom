import axios from "axios";

import React, { useState } from "react";
import { useAuth } from "../../context/Authorization";
import { useCart } from "../../context/CartContext";

const CartCards = ({ cartItem }) => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const deleteItem = () => {
    console.log("cart item id", cartItem._id);
    axios
      .delete(`http://localhost:5000/api/cart/${cartItem._id}/${auth?.user.id}`)
      .then((res) => {
        console.log("delete resposne");
        if (res.data.success) {
          console.log("DELETE DELETE DELETE");
          setCart(res.data.cartData);
        } else {
          console.log("Not Delete");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container mb-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col-lg-4 col-sm-12 flex">
            <img
              src={cartItem.image}
              alt=""
              style={{ width: "55%", height: "95%" }}
            />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="d-flex justify-content-between align-item-center">
              <h3>{cartItem.title}</h3>
              <h6 className="text-success">₹ {cartItem.price}</h6>
            </div>
            <p>{cartItem.desc}</p>
            <div className="d-flex justify-content-between align-item-center">
              <p>Quantity: {cartItem.quantity}</p>
              <button className="btn btn-color" onClick={() => deleteItem()}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
