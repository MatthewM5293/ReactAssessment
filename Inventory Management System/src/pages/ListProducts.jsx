//Show list of products
import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../Firebase/FirebaseProduct";
import { Link } from "react-router-dom";

const ViewProduct = () => {
const [products, setProducts] = useState([]);

//Update the ListProducts with the data
useEffect(() => {
    const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
    };

    fetchProducts();
}, []);


async function handleDelete (id) {
    try {
    await deleteProduct(id);
    alert("Product deleted successfully!");
    const updatedProducts = await getProducts();
    setProducts(updatedProducts); // Update the ListProducts with the new data
    } catch (error) {
    alert("Error deleting product:", error.message);
    }
};

return (
    <div>
    <h1>Product List</h1>
    <ul>
        {products.map((product) => (
        <li key={product.id}>
            <p>{product.ProductName}</p>
            <p>{product.ProductDesc}</p>
            <p>{product.ProductPrice}</p>
            <Link to={`/edit/${product.id}`}>Edit</Link> | 
            <button onClick={() => handleDelete(product.id)}>Delete</button>
        </li>
        ))}
    </ul>
    </div>
);
};

export default ViewProduct;
