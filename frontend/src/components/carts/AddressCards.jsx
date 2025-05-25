import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaLocationDot } from "react-icons/fa6";
const AddressCards = () => {
  const [userdata, setUserData] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/address")
      .then((result) => {
        console.log(result.data);
        setUserData(result.data.addressDATA);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="container mb-5 shadow-lg p-5 mb-5 bg-body-tertiary rounded">
        <div className="row">
          {userdata.map((data, index) => {
            return (
              <div
                className="col-7 d-flex justify-content-between align-item-center"
                key={index}
              >
                <div className="col-2">
                  <FaLocationDot size={65} />
                </div>
                <div className="col-5">
                  <h5>Name:{data.name}</h5>
                  <h5>Contact:{data.phone}</h5>
                  <h5>City:{data.city}</h5>
                  <h5>State:{data.state}</h5>
                  <h5>pincode:{data.pincode}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    /* <FaLocationDot size={65} /> */
  );
};

export default AddressCards;
