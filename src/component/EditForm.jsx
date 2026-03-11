import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    PName: "",
    PDescription: "",
    PPrice: "",
    PCategory: "",
    PImage: ""
  });

  const [preview, setPreview] = useState("");

  // 🔹 Get product data
  useEffect(() => {
    async function getSingleProduct() {
      const { data } = await axios.get(
        `http://localhost:9000/product/get-product/${id}`
      );

      setProduct(data.product);

      // 👇 show old image
      setPreview(
        `http://localhost:9000/${data.product.PImage.replace(/\\/g, "/")}`
      );
    }
    getSingleProduct();
  }, [id]);

  // 🔹 Handle text change
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      setProduct({
        ...product,
        PImage: file
      });

      // show new image preview instantly
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🔹 Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("PName", product.PName);
    formData.append("PDescription", product.PDescription);
    formData.append("PPrice", product.PPrice);
    formData.append("PCategory", product.PCategory);

    // only append if new file selected
    if (product.PImage instanceof File) {
      formData.append("PImage", product.PImage);
    }

    await axios.put(
      `http://localhost:9000/product/update-product/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    alert("Product Updated Successfully ✅");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="PName"
            value={product.PName}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            name="PDescription"
            value={product.PDescription}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            name="PPrice"
            value={product.PPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mb-3">
            <img
              src={preview}
              height="200"
              width="200"
              alt="preview"
            />
          </div>
        )}

        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            name="PImage"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Product
        </button>

      </form>
    </div>
  );
};

export default EditForm;