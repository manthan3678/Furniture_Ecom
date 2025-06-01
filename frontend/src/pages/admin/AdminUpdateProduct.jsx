import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/Authorization";
import AdminLayout from "../../components/admin/AdminLayout";
import axios from "axios";
import { toast } from "react-toastify";

const AdminUpdateProduct = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  // !!!! get Single Product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/product/get-single-product/${params.slug}`
      );
      // console.log(data);
      setId(data.product._id);
      setName(data.product.name);
      setPhoto(data.product.photo);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setShipping(data.product.shipping);
      setQuantity(data.product.quantity);
    } catch (error) {
      console.log(error);
    }
  };
  // Update Product !!!
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/product/update-product/${id}`,
        { name, description, photo, price, shipping, quantity },
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      if (data?.success) {
        toast.success("Product Details Updated");
        navigate("/dashboard/admin/product-shop");
      } else {
        toast.error(data?.messages);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Wrong While Updating");
    }
  };
  // !!! Delete Product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are U Sure You want to Delete THe Product");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:5000/api/product//delete-product/${id}`
      );
      toast.success("Product Deleted SuccessFully");
      navigate("/dashboard/admin/product-shop");
    } catch (error) {
      console.log("Error while Deleting", error);
    }
  };
  // Har render pr chalega
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <AdminLayout>
        <div className="container-fluid  ">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1>Update Products</h1>
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
                {/*  */}
                <div className="mb-3">
                  <button className="btn btn-success" onClick={handleUpdate}>
                    UPDATE PRODUCT
                  </button>
                  <button
                    className="btn btn-danger mx-5"
                    onClick={handleDelete}
                  >
                    DELETE PRODUCT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminUpdateProduct;
