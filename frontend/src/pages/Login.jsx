import * as React from "react";
import loginimg from "../assets/images/loginimg.png";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authorization.jsx";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("subited");
      axios
        .post("http://localhost:5000/api/auth/login", {
          email,
          password,
        })
        .then((result) => {
          // console.log(result);
          if (result.data.success) {
            setAuth({
              user: result.data.user,
              token: result.data.token,
            });
            localStorage.setItem("token", JSON.stringify(result.data));
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* MAin Container of Register Page */}
      <div className="container-fluid w-100 vh-100">
        <div className="row vh-100">
          {/* Left side For Image */}
          <div className="img-container col-sm-12 col-md-6 col-12">
            <img src={loginimg} alt="" />
          </div>
          {/* Form, Right Side */}
          <div className="right-sides col-sm-12 col-md-6 col-12">
            <div className="text">
              <div className=" text">
                <p className="form-h1">Welcome,</p>
                <p className="form-h4">Please enter the credential to login</p>
              </div>
            </div>
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  type="email"
                  value={email}
                  className="form-control input"
                  id="exampleInputEmail1"
                  placeholder="User Name or Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="emailHelp" className="form-text">
                Don't have an account{" "}
                <Link to="/register" className="register-login ">
                  {" "}
                  Register here
                </Link>
                .
              </div>{" "}
              <button type="submit" className="register-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
