import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authorization";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
const ProtectedRoute = () => {
  const [success, setSuccess] = useState(false);
  const [auth, setAuth] = useAuth();
  // const navigate = useNavigate();
  const [cart, setCart] = useCart();
  useEffect(() => {
    // console.log(JSON.stringify(auth));
    const checkToken = async () => {
      axios
        .get(`http://localhost:5000/api/cart/${auth?.user.id}`)
        .then((res) => {
          setSuccess(res.data.success);
          console.log(res.data);
          setCart(res.data.cartdata);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (auth?.token) {
      checkToken();
    }
  }, []);
  // const checkAuth = async () => {
  //   console.log("What is the data here", auth?.user.id);
  //   axios.get(`http://localhost:5000/api/cart/${auth?.user.id}`).then((res) => {
  //     console.log("This is cart Data", res.data);
  //     if (res.data.success) {
  //       setSuccess(true);
  //       setCart(res.data.cartData);
  //     } else {
  //       setSuccess(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log("This is token" + auth?.token);
  //   if (auth?.token) {
  //     console.log("Function Called" + auth?.token);
  //     checkAuth();
  //   }
  // }, [auth?.token]);

  return success ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
