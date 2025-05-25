import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotfound from "./pages/PageNotfound";
import Product from "./pages/Product";
import Order from "./pages/Order";
import ProductesDetail from "./pages/ProductesDetail";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHome from "./pages/admin/AdminHome";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUser";
import Address from "./pages/Address";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductesDetail />} />
          <Route path="/address" element={<Address />} />
          {/* *******nested Routes*******  */}
          <Route path="/cart" element={<ProtectedRoute />}>
            <Route path="" element={<Cart />} />
          </Route>

          {/* %%%%%%%Admin Routes%%%%%%%%% */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
