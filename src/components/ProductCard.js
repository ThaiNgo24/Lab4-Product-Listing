import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product || !product.id) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px", height: "100px" }}
        />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
