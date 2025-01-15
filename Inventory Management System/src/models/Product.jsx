import { v4 as uuidv4 } from 'uuid'; //Documentation: https://www.npmjs.com/package/uuid

class Product {
    constructor(ProductID, ProductName, ProductDesc, ProductPrice) {
    this.ProductID = ProductID || uuidv4();
    this.ProductName = ProductName;
    this.ProductDesc = ProductDesc || "No description provided.";
    this.ProductPrice = ProductPrice || 0.0;
    }

    validate() {
        if (!this.ProductID) throw new Error("ProductID is required.");
        if (!this.ProductName) throw new Error("ProductName is required.");
        if (typeof this.ProductPrice !== "number" || this.ProductPrice < 0) {
            throw new Error("ProductPrice must be a positive number.");
        }
    return true;
    }
}

export default Product;
