import React from "react";


// Footer component
export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "40px 20px",
        marginTop: 40,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        {/* Logo + About */}
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ marginBottom: 10 }}>🛒 Sanizz</h2>
          <p style={{ color: "#ccc", lineHeight: 1.5 }}>
            Your one-stop shop for the best products at the best prices.
            Fast delivery, secured payments, and 24/7 support.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3 style={{ marginBottom: 10 }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#ccc" }}>
            <li style={{ marginBottom: 8, cursor: "pointer" }}>Home</li>
            <li style={{ marginBottom: 8, cursor: "pointer" }}>Products</li>
            <li style={{ marginBottom: 8, cursor: "pointer" }}>About</li>
            <li style={{ marginBottom: 8, cursor: "pointer" }}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: 1, minWidth: 250 }}>
          <h3 style={{ marginBottom: 10 }}>Contact</h3>
          <p style={{ color: "#ccc" }}>📍 Chennai, Tamil Nadu</p>
          <p style={{ color: "#ccc" }}>📞 +91 98765 43210</p>
          <p style={{ color: "#ccc" }}>📧 support@sanizz.com</p>
        </div>
      </div>

      <hr style={{ margin: "30px 0", borderColor: "#333" }} />

      <p style={{ textAlign: "center", color: "#aaa" }}>
        © {new Date().getFullYear()} Sanizz — All Rights Reserved.
      </p>
    </footer>
  );
}
