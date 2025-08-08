import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px",
  };

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: "bold",
    color: isActive ? "blue" : "black",
  });

  return (
    <CartProvider>
      <Router>
        <nav style={navStyle}>
          <NavLink to="/" style={linkStyle}>
            Products
          </NavLink>
          <NavLink to="/cart" style={linkStyle}>
            Cart
          </NavLink>
          <NavLink to="/checkout" style={linkStyle}>
            Checkout
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
