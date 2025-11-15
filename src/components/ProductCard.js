import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

export default function ProductCard({ item }) {

  // State to manage popup visibility
  const [popup, setPopup] = useState(false);


  // Function to add item to cart
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((p) => p.id === item.id);

    // If item doesn't exist in cart, add it
    if (!exists) {
      cart.push({ ...item, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart!");
    } 
    // If item already exists, show alert
    else {
      alert("Already added in cart!");
    }
  };

  return (
    <>
      <div className="product-card">
        {/*  Product image with click to open popup */}
        <img
          src={item.image}
          alt={item.title}
          onClick={() => setPopup(item.image)}
          style={{ cursor: "pointer", width: "200px" }}
        />

        <h3>{item.title}</h3>
        <p>₹{item.price}</p>

        <button onClick={addToCart}>Add to Cart</button>
      </div>

      {popup && <ImagePopup image={popup} close={() => setPopup(false)} />}
    </>
  );
}
