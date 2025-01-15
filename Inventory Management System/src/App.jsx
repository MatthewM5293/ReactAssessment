import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ListProducts from "./pages/Product/ListProducts";
import CreateProduct from "./pages/Product/CreateProduct";
import EditProduct from "./pages/Product/EditProduct";

const App = () => {
  return (
    <>
      <Router>
        <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
