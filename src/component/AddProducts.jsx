import React, { useState } from 'react'
import '../styles/add-product.css'
import axios from 'axios';
const AddProducts = () => {
    const initialState = {
        PName: "",
        PCategory: "",
        PPrice:"",
        PImage: "",
        PDescription: "",
    }
    const [product, setProducts] = useState(initialState);
    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if(name === "PImage"){
            setProducts({...product, PImage: files[0] });
        }else{
            setProducts({...product, [name]: value });
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("PName" , product.PName);
        data.append("PPrice" , product.PPrice);
        data.append("PCategory" , product.PCategory);
        data.append("PImage" , product.PImage);
        data.append("PDescription" , product.PDescription);

        await axios.post("http://localhost:9000/product/add-product",
            data,
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }
        );
        setProduct(initialState);
        alert("product Uploaded");
    }
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-5">
            <div className="card p-3">
                <form onSubmit={handleSubmit}>
                    <div class='mb-3'>
                        <label class='form-label'>Product Category</label>
                        <select onChange={handleChange} name='PCategory' className='form-select'>
                            <option value="">--SELECT CATEGORY--</option>
                            <option value={"Clothes"}>Clothes</option>
                            <option value={"Electronics"}>Electronics</option>
                            <option value={"Furniture"}>Furniture</option>
                            <option value={"Shoes"}>Shoes</option>
                            <option value={"Miscellaneous"}>Miscellaneous</option>
                            <option value={"Bags"}>Bags</option>
                        </select>
                        {/* <input onChange={handleChange} name='PName' type="text" class="form-control" placeholder='Enter Product Category'></input> */}
                    </div>
                    <div class='mb-3'>
                        <label class='form-label'>Product Price</label>
                        <input onChange={handleChange} name='PPrice' type="text" class="form-control" placeholder='Enter Product Price'></input>
                    </div>
                    <div class='mb-3'>
                        <label class='form-label'>Product Name</label>
                        <input onChange={handleChange} name='PName' type="text" class="form-control" placeholder='Enter Product Name'></input>
                    </div>
                    <div class='mb-3'>
                        <label class='form-label'>Product Image</label>
                        <input onChange={handleChange} name='PImage' type="file" class="form-control"></input>
                    </div>
                    <div class='mb-3'>
                        <label class='form-label'>Product Description</label>
                        <textarea onChange={handleChange} name="PDescription" class="form-control" rows="3" placeholder='Enter Product description'></textarea>
                    </div>
                    <div className="mb-3 text-center">
                        <button className="btn btn-outline-success btn-sm">Upload Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProducts