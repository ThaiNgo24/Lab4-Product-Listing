import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    clearCart();
    alert("Order placed successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <span>{item.title}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button style={{ marginTop: "10px" }} onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
