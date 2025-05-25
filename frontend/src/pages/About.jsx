import React from "react";
import Layout from "../components/Layout/Layout";
import { SlCallOut } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { PiPottedPlant } from "react-icons/pi";
import { useAuth } from "../context/Authorization";
const About = () => {
  const [auth] = useAuth();
  console.log(auth);
  return (
    <>
      <Layout>
        <div className="container text-center mt-5 mb-5 shadow p-3 mb-5 bg-body-tertiary">
          <h2 className="">About Us</h2>
          <p className="mb-5 mt-3">
            Crafting premium furniture that transforms spaces, with unmatched
            quality, service, and style.
          </p>
          <div className="row">
            <div className="col-lg-4 col-xs-12 ">
              <span className=" ab-icon fs-2">
                <PiPottedPlant />
              </span>
              <h6 className="mt-3">Large Assorstment</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, ducimus.
              </p>
            </div>
            <div className="col-lg-4 col-xs-12">
              <span className="ab-icon fs-2">
                <BsBoxSeam />
              </span>
              <h6 className="mt-3">free & fast shippment</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, ducimus.
              </p>
            </div>
            <div className="col-lg-4 col-xs-12">
              <span className="ab-icon fs-2">
                <SlCallOut />
              </span>
              <h6 className="mt-3">24/7 Support</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, ducimus.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
