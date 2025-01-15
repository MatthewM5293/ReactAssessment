//edit page for Product passing in Product model
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../Firebase/FirebaseProduct";
import Product from "../../models/Product";

function EditProduct() {
  //get ID passed in
  const { id } = useParams();

  const [formData, setFormData] = useState({
    ProductID: "",
    ProductName: "",
    ProductDesc: "",
    ProductPrice: "",
  });

  //add data from passed in ID to front end
  useEffect(() => {
    async function fetchProduct() {
      const product = await getProductById(id);
      if (product) {
        setFormData(product); //show if found
      } else {
        alert("Product not found"); //show alert if not valid ID
      }
    }

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
}

export default EditProduct;
