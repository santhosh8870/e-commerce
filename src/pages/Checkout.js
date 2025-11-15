import React, { useEffect, useState } from "react";
import SuccessAnimation from "../components/SuccessAnimation";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to handle placing the order
  const placeOrder = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("Please login first!");
    if (cart.length === 0) return alert("Your cart is empty!");

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleString(),
      amount: cart.reduce((acc, item) => acc + item.qty * item.price, 0),
    };

    // Save the new order and clear the cart
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    setSuccess(true); // show animation
  };

  // If order is successful, show success animation
  if (success) return <SuccessAnimation />;

  return (
    <div className="checkout-page" style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Products in Cart</h3>

          <div className="checkout-items">
            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt="" className="checkout-img" />
                <div>
                  <h4>{item.title}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>
                    <b>Total: ₹{item.qty * item.price}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: 20 }}>
            Total Amount:{" "}
            <span style={{ color: "green" }}>
              ₹{cart.reduce((a, i) => a + i.qty * i.price, 0)}
            </span>
          </h2>

          <button
            onClick={placeOrder}
            style={{
              padding: "12px 20px",
              background: "blue",
              color: "white",
              border: "none",
              fontSize: 18,
              marginTop: 20,
              cursor: "pointer",
              borderRadius: 6,
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
