import React from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/CartContext";
import CartCards from "../components/carts/CartCards";
import { Link } from "react-router-dom";
import OrdersCard from "../components/carts/OrdersCard";

const Order = () => {
  const [cart, setCart] = useCart();
  // console.log(cart);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-sm-12 col-lg-8">
              <h1 className="fs-1 fw-bold text-center mt-4 ">My Orders</h1>
              <p className="text-center fs-6 text-muted mb-4">
                These are some of the products that you have Ordered!.
              </p>
              {cart?.map((items, i) => {
                return <OrdersCard key={i} cartItem={items} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Order;
