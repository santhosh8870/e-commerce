import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);


  // Load cart from localStorage on component mount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);


  // Update item quantity in cart
  const updateQty = (id, type) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        return { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 };
      }
      return item;
    }).filter(i => i.qty > 0);

    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };


  // Delete item from cart
  const deleteItem = (id) => {
    const updated = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };


  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <h3>No items in cart.</h3>}

      {cart.map(item => (

        // Render each cart item
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt="" width={"50px"} />
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>

          {/* Quantity controls */}
          <div className="qty">
            <button onClick={() => updateQty(item.id, "dec")}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, "inc")}>+</button>
          </div>

          {/* Remove item button */}
          <button className="remove" onClick={() => deleteItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <a className="checkout-btn" href="/checkout">Proceed to Checkout</a>
    </div>
  );
}
