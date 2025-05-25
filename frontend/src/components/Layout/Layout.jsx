import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ height: "90%" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
