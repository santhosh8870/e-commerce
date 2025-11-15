import React, { useEffect } from "react";

export default function SuccessAnimation() {

  // Redirect to orders page after animation
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/orders";
    }, 2000); // redirect after 2 sec
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark draw"></div>
        </div>
        <h2>Order Placed!</h2>
        <p>Redirecting to your order history...</p>
      </div>
    </div>
  );
}
