import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authorization";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Layout/Spinner";
const ProtectedRoute = () => {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);
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
