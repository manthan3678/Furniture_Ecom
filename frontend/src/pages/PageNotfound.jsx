import React from "react";
import Layout from "../components/Layout/Layout";
import "../App.css";
import { Link } from "react-router-dom";
const PageNotfound = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-column">
          <h2 className="m-5">404 Page Not found</h2>
          <Link to="/">
            {" "}
            <button className="btn btn-color m-5">Go Back</button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default PageNotfound;
