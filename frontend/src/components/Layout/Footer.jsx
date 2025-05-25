import React from "react";
import "../../App.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid flex footer-container ">
        <div className="row w-100 h-50">
          {/* ######################LEFT SIDE CONTECT ######################### */}
          <div className="col-lg-4 col-sm-12 left-side p-5">
            <h3 className="p-2">Maan</h3>
            <p className="p-2">
              We help You to Design Your Home With Our Furniture
            </p>
            {/* ########## SOCIAL LINK CONTECT $$$$$$$$$$$$$$$$$ */}
            <Link to="/" className="text-decoration-none text-dark">
              <span className="fs-3 m-2  icon-cls">
                <TiSocialFacebook />
              </span>
            </Link>

            <Link to="/" className="text-decoration-none text-dark">
              <span className="fs-3 m-2 icon-cls">
                <TiSocialInstagram />
              </span>
            </Link>
            <Link to="/" className="text-decoration-none text-dark">
              <span className="fs-3 m-2 icon-cls">
                <TiSocialTwitter />
              </span>
            </Link>

            <p className="p-2">2024 All Rights Reserved Term Of MAAN</p>
          </div>

          {/*  ################################### RIGHT SIDE CONTECT ################################# */}
          <div className="col-lg-8 col-sm-12 right-side flex ">
            {/* @@@@@@@@@@@@@@@@@@ HERE ARE THREE DIFFRENT DIV  @@@@@@@@@@@@@@@2 */}
            {/* !!!!!!!!!!!!!!!!!!!!!!!FIRST DIV!!!!!!!!!!!!!!!!!!!! */}
            <div className="col-2 m-lg-5 ">
              <ul style={{ listStyle: "none" }} className="footer-ul">
                <li className="fs-3">Information</li>
                <Link to="/" className="text-decoration-none ">
                  <li>About</li>
                </Link>
                <Link to="/" className="text-decoration-none ">
                  <li>Products</li>
                </Link>
                <Link to="/" className="text-decoration-none t">
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!SECOND DIV!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <div className="col-2 m-lg-5">
              <ul style={{ listStyle: "none" }} className="footer-ul">
                <li className="fs-3">Contact</li>
                <Link to="/" className="text-decoration-none ">
                  <li>Community</li>
                </Link>
                <Link to="/" className="text-decoration-none ">
                  <li>Career</li>
                </Link>
                <Link to="/" className="text-decoration-none ">
                  <li>Our Story</li>
                </Link>
              </ul>
            </div>

            {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!1 THIRD DIV !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <div className="col-3">
              <ul style={{ listStyle: "none" }} className="footer-ul">
                <li className="fs-3">Contact</li>
                <Link to="/" className="text-decoration-none ">
                  <li>Getting Started</li>
                </Link>
                <Link to="/" className="text-decoration-none ">
                  <li>Pricing</li>
                </Link>
                <Link to="/" className="text-decoration-none k">
                  <li>Resources</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
