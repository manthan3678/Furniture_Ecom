import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authorization";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import { useCart } from "../../context/CartContext";
const ProtectedRoute = () => {
  const [auth, loading] = useAuth();
  const [ok, setOk] = useState(false);
  const [setCart] = useCart();
  // console.log(auth);
  useEffect(() => {
    const checkToken = async () => {
      const res = await axios.get(`http://localhost:5000/api/auth/admin-auth`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
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

  return ok ? <Outlet /> : <Spinner path="" />;
};

export default ProtectedRoute;
