import React from "react";

const OrdersCard = ({ cartItem }) => {
  return (
    <div>
      <div className="container mb-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col-lg-4 col-sm-12 flex">
            <img
              src={cartItem.image}
              alt=""
              style={{ width: "50%", height: "95%" }}
            />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="d-flex justify-content-between align-item-center">
              <h3>{cartItem.title}</h3>
              <h6 className="text-success">₹ {cartItem.price}</h6>
            </div>
            <p>{cartItem.desc}</p>
            <p>Quantity: {cartItem.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
