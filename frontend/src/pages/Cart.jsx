import React from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/CartContext";
import CartCards from "../components/carts/CartCards";

import CheckOutCart from "../components/carts/CheckOutCart";

const Cart = () => {
  const [cart, setCart] = useCart();
  // console.log(cart);
  const date = new Date();
  date.setDate(date.getDate() + 1 * 7);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row justify-content-between mb-4">
            <div className="col-sm-12 col-lg-7">
              <h1 className="fs-1 fw-bold text-center mt-4 ">My Cart</h1>
              <p className="text-center fs-6 text-muted mb-4">
                These are some of the products that you have added to your cart.
              </p>
              {cart?.map((items, i) => {
                return <CartCards key={i} cartItem={items} />;
              })}
            </div>
            <CheckOutCart />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
