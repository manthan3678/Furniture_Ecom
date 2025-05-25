import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CheckOutCart = () => {
  const [cart, setCart] = useCart();
  const date = new Date();
  date.setDate(date.getDate() + 1 * 7);
  const shippingAmount = 50;
  return (
    <>
      <div className=" col-sm-12 col-lg-5 mt-4">
        <div className="p-4 shadow bg-white mb-4">
          <h3 className="text-center mt-2 mb-4">Order Summary</h3>
          <div className="row mt-3">
            <div className="col-6">
              <h6>Price</h6>
            </div>

            <div className="col-6">
              <h6>
                {cart.reduce((previousValue, currentValue) => {
                  return (
                    previousValue + currentValue.price * currentValue.quantity
                  );
                }, 0)}
              </h6>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6">
              <h6>Shipping</h6>
            </div>
            <div className="col-6">
              <h6>₹ {shippingAmount} </h6>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h6>Coupon Applied</h6>
            </div>
            <div className="col-6 text-success">None</div>
          </div>
          <hr />

          <div className="row mt-3">
            <div className="col-6">
              <h6>Total</h6>
            </div>
            <div className="col-6">
              <h6>
                {" "}
                {cart.reduce((previousValue, currentValue) => {
                  return (
                    previousValue + currentValue.price * currentValue.quantity
                  );
                }, 0) + shippingAmount}
              </h6>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6">
              <h6>Estimated Delivery</h6>
            </div>
            <div className="col-6 ">
              <h6>
                {date.getDate() + "/"}
                {date.getMonth() + 1}
                {"/" + date.getFullYear()}{" "}
              </h6>
            </div>
          </div>
          <Link to={"/address"}>
            <button className="btn btn-color mt-4 w-100">Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOutCart;
