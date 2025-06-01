import * as React from "react";
import RegisterImg from "../assets/Images/loginimg.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/api/auth/register", {
          name,
          email,
          password,
        })
        .then((result) => {
          // console.log(result);
          if (result.data.success) {
            toast(" Sumbited/Register SuccessFully");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in Registration");
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
          {" "}
          {/* Left side For Image */}
          <div className="img-container col-sm-12 col-md-6">
            <img src={RegisterImg} alt="" />
          </div>
          {/* Form, Right Side */}
          <div className="col-sm-12 col-md-6 col-12">
            <div className=" text">
              <p className="form-h1">Welcome,</p>
              <p className="form-h4">Please enter the credential to Register</p>
            </div>
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  value={name}
                  className="form-control input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label ">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  className="form-control input"
                  id="exampleInputPassword3"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label ">
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
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={cnfPassword}
                  className="form-control input"
                  id="exampleInputPassword2"
                  placeholder=" Confirm Password"
                  required
                  onChange={(e) => setCnfPassword(e.target.value)}
                />
              </div>
              <div id="emailHelp" className="form-text">
                Already have an Account
                <Link to="/login" className="register-login ">
                  {" "}
                  Login here
                </Link>
                .
              </div>
              {password !== cnfPassword ? (
                <button disabled type="submit" className="register-btn ">
                  Register
                </button>
              ) : (
                <button type="submit" className="register-btn">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
