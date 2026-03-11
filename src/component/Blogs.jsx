import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get("http://localhost:9000/product/all-Products",
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });
      setProduct(data);
    }
    getProduct();
  }, [])
  console.log(products)
  if (products.length == 0) {
    return (
      <h1>Loading....</h1>
    )
  }
  return (
    <>
      <div className="row bg-white">
        {products.products.map((item, index) => (
          <div className="col-lg-3">
            <div className="card bg-white" key={index}>
              <img src={`http://localhost:9000/${item?.PImage.replace(/\\/g, "/")}`} alt="dummy" height="300" />
              <h4>{item.PName}</h4>
              <h4>{item.PDescription.slice(0, 20)}</h4>
              <h4>MRP:${item.PPrice}</h4>
              <Link to={`/editForm/${item._id}`}>
                <button className="btn btn-outline-success">Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs