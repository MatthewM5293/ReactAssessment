import { db } from "./Firebase";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function createProduct(product){
    try {
        const docRef = await addDoc(productsCollection, product);
        return docRef.id;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

export async function getProducts(){
    try {
        const querySnapshot = await getDocs(productsCollection);
        return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export async function getProductById(id){
    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
};

export async function updateProduct(id, updatedData){
    try {
        const docRef = doc(db, "products", id);
        await updateDoc(docRef, updatedData);
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};

export async function deleteProduct (id){
    try {
        const docRef = doc(db, "products", id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};
