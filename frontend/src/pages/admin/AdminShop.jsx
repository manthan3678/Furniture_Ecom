import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/Authorization";
import { Link } from "react-router-dom";
//
const AdminShop = () => {
  const [products, setProducts] = useState([]);
  const [auth] = useAuth();
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/product/get-product`,
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      if (data?.success) {
        setProducts(data.products);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong In Product List");
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <AdminLayout>
      <div className="">
        {" "}
        <h3 className="text-center my-2">Product List</h3>
        <div className="d-flex flex-wrap">
          {products?.map((product) => {
            return (
              <Link
                key={product._id}
                to={`/dashboard/admin/product/${product.slug}`}
                className="text-decoration-none "
              >
                <div className="card mx-3 my-2" style={{ width: "19rem" }}>
                  <img
                    src={product.photo}
                    className="card-img-top"
                    alt="image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminShop;
