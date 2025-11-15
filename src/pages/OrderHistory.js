import React, { useEffect, useState } from "react";

export default function OrdersHistory() {

  // State to hold orders
  const [orders, setOrders] = useState([]);


  // Load orders from localStorage on component mount
  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>

      {orders.length === 0 && <h3>No order history.</h3>}

      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ₹{order.amount}</p>
          <hr />
          <div className="order-items">
            {order.items.map((i) => (
              <p key={i.id}>{i.title} × {i.qty}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
