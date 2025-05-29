import React, { useEffect, useState } from "react";
import "./Spinner.css";
import { useLocation, useNavigate } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  //
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  //
  return (
    <>
      <div className="my-5">
        <div className="loader"></div>
        <div className="d-flex justify-content-center">
          <p className="fs-4"> Wait {count} Seconds </p>
        </div>
      </div>
    </>
  );
};

export default Spinner;
