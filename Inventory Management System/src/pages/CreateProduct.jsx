import React, { useState } from "react";
import { createProduct } from "../Firebase/FirebaseProduct";
import Product from "../models/Product";

function CreateProduct (){
const [formData, setFormData] = useState({
    ProductID: "",
    ProductName: "",
    ProductDesc: "",
    ProductPrice: ""
});

//updates form state
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

//validates product
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const product = new Product(
        formData.ProductID,
        formData.ProductName,
        formData.ProductDesc,
        parseFloat(formData.ProductPrice)
    );
    product.validate();
    await createProduct({ ...product });
    alert("Product created successfully!");
    } catch (error) {
    alert(error.message);
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="ProductName"
        placeholder="Product Name"
        value={formData.ProductName}
        onChange={handleChange}
    />
    <input
        type="text"
        name="ProductDesc"
        placeholder="Product Description"
        value={formData.ProductDesc}
        onChange={handleChange}
    />
    <input
        type="number"
        name="ProductPrice"
        placeholder="Product Price"
        value={formData.ProductPrice}
        onChange={handleChange}
    />
    <button type="submit">Create Product</button>
    </form>
);
};

export default CreateProduct;
