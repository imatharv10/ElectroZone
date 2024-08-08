import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import User_Register from "./componants/User_Register";
import Seller_Login from "./componants/Seller_Login ";
import Seller_Register from "./componants/Seller_Register";
import User_Login from "./componants/User_Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Seller_Dashboard from "./pages/Seller_Dashboard";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import AddAddress from "./componants/Add-Address";
import AddProduct from "./componants/Add-Product";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User-Register" element={<User_Register />} />
        <Route path="/User-Login" element={<User_Login />} />
        <Route path="/Seller-Register" element={<Seller_Register />} />
        <Route path="/Seller-Login" element={<Seller_Login />} />
        <Route path="/Seller-Dashboard" element={<Seller_Dashboard />} />
        <Route path="/Admin-Dashboard" element={<Admin_Dashboard />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route
          path="/ProductDetails/{ProductName}"
          element={<ProductDetailsPage />}
        />
        <Route path="/Add-Address" element={<AddAddress />} />
        <Route path="/Add-Product" element={<AddProduct />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/WishList" element={<WishListPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
