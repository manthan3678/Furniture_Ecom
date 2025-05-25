import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/CartContext";
import AddressCards from "../components/carts/AddressCards";
import CheckOutCart from "../components/carts/CheckOutCart";

const Address = () => {
  const [cart, setCart] = useCart();
  const [showModel, setShowModel] = useState(false);
  // console.log(cart);

  // const [addressDetails, setAddressDetails] = useState({
  //   name: "",
  //   contact: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   pincode: "",
  // });
  const [name, setname] = useState("");
  const [phone, setphone] = useState(0);
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [pincode, setpincode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + "," + address);
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row mb-4 d-flex justify-content-between align-item center">
            <div className="col-sm-12 col-lg-8">
              <h1 className="fs-1 text-center ">Address Details</h1>
            </div>
            <div className="col-lg-4 mt-2">
              <button
                type="button"
                className="btn btn-color"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setShowModel(true)}
              >
                Add Address
              </button>
            </div>
          </div>
          {/****************** Address selecting Portion ********************************* */}

          <div className="row d-flex">
            <div className="col-lg-6">
              {" "}
              <AddressCards />
            </div>
            <div className="col-lg-6">
              {" "}
              <CheckOutCart />
            </div>
          </div>
          {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Address ka form hai ye!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          {showModel ? (
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Your Address
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                      {/* @@@@@@@Main Body Of form@@@@@@ */}
                      <div className="modal-body">
                        <div>
                          {/* Name And Contact */}
                          <div className="d-flex">
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setname(e.target.value)}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Full Name"
                              />
                            </div>
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Contact No
                              </label>
                              <input
                                type="tel"
                                onChange={(e) => setphone(e.target.value)}
                                className="form-control ms-1"
                                id="exampleFormControlInput1"
                                placeholder="Contact Number"
                              />
                            </div>
                          </div>
                          <div className="mb-1">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Full Address
                            </label>
                            <input
                              type="text"
                              onChange={(e) => setaddress(e.target.value)}
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Full Address Including Plot No"
                            />
                          </div>
                          {/*  State ANd City */}
                          <div className="d-flex">
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                City
                              </label>
                              <input
                                onChange={(e) => setcity(e.target.value)}
                                type="text"
                                className="form-control "
                                id="exampleFormControlInput1"
                                placeholder="City"
                              />
                            </div>
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                State
                              </label>
                              <input
                                onChange={(e) => setstate(e.target.value)}
                                type="text"
                                className="form-control ms-1"
                                id="exampleFormControlInput1"
                                placeholder="State"
                              />
                            </div>
                          </div>
                          {/*  */}
                          <div className="d-flex">
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Pincode
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setpincode(e.target.value)}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Full Name"
                              />
                            </div>
                            <div className="mb-1">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setcountry(e.target.value)}
                                className="form-control ms-1"
                                id="exampleFormControlInput1"
                                placeholder="Contact Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //////////////////////////// */}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-color">
                          Save Address
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Address;
