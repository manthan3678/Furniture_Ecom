import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Authorization";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AdminProducts = () => {
  // const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  //
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // const productData = new FormData();
      // // photo less then 1mb
      // productData.append("photo", photo);
      // productData.append("name", name);
      // productData.append("description", description);
      // productData.append("price", price);
      // productData.append("quantity", quantity);
      // productData.append("shipping", shipping);

      const { data } = await axios.post(
        "http://localhost:5000/api/product/create-product",
        {
          name,
          photo,
          description,
          price,
          quantity,
          shipping,
        },
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      if (data?.success) {
        toast.success("Product Created SuccessFully");
        navigate("/dashboard/admin/product-shop");
      } else {
        toast.error("Something Went Wrong");
      }
      setName("");
      setPrice("");
      setPhoto("");
      setDescription("");
      setQuantity("");
      setShipping("");
    } catch (error) {
      console.log("Something error in Creating", error);
    }
  };
  return (
    <AdminLayout>
      <div className="container-fluid  ">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>Create Products</h1>
            <div className="mt-1 w-75">
              {/* isko bad me dekhna iska data nhi ara  */}

              {/* image section */}
              <div className="mb-3">
                <input
                  type="text"
                  value={photo}
                  placeholder="Give the link of Image"
                  className="form-control"
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              {/*  */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write A Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/*  */}
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  name=""
                  id=""
                  placeholder="Write A Description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Write A Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Write A Quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3 ">
                <input
                  type="text"
                  value={shipping}
                  placeholder="Write Yes Or No"
                  className="form-control"
                  onChange={(e) => setShipping(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-success" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
