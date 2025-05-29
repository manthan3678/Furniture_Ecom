import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/Authorization";
import Login from "../../pages/Login";
// import { useCart } from "../../context/CartContext";

const UserProtectRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  // const [setCart] = useCart();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:5000/api/auth/user-auth", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      if (res.data.ok) {
        setOk(true);
        // setCart(res.data.cartdata);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Login />;
};

export default UserProtectRoute;
