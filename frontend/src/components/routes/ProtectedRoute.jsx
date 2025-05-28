import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authorization";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login";
import { useCart } from "../../context/CartContext";
const ProtectedRoute = () => {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);
  const [setCart] = useCart();
  // console.log(auth?.token);
  useEffect(() => {
    const checkToken = async () => {
      const res = await axios.get(`http://localhost:5000/api/auth/admin-auth`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      console.log(res.data);
      if (res.data.ok) {
        setOk(true);
        setCart(res.data.cartdata);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      checkToken();
    }
  }, []);

  return ok ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
