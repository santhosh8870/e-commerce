import React, { useState } from "react";
import { products } from "../data/Products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  // State for filters and sorting
  const [search, setSearch] = useState("");

  // Price Range Filter
  const [priceRange, setPriceRange] = useState("all");

  // Sorting
  const [sort, setSort] = useState("none");
  
  // Load More
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter + Search
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Price Range Filter
  if (priceRange !== "all") {
    const [min, max] = priceRange.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }

  // Sorting
  if (sort === "low-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }
  if (sort === "high-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  // Load More
  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div style={{ padding: 20 }}>

      {/* Filters Section */}
      <div
        className="filters"
        style={{ marginBottom: 20, display: "flex", gap: 20 }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 10, width: 200 }}
        />

        {/* Price */}
        <select
          onChange={(e) => setPriceRange(e.target.value)}
          style={{ padding: 10 }}
        >
          <option value="all">All Prices</option>
          <option value="0-5000">₹0 - ₹5000</option>
          <option value="5000-10000">₹5000 - ₹10000</option>
          <option value="10000-20000">₹10000 - ₹20000</option>
        </select>

        {/* Sort */}
        <select
          onChange={(e) => setSort(e.target.value)}
          style={{ padding: 10 }}
        >
          <option value="none">Sort</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Product Cards */}
      <div
        className="product-container"
        style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
      >
        {filtered.slice(0, visibleCount).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filtered.length && (
        <button
          onClick={loadMore}
          style={{
            padding: "10px 20px",
            margin: "20px auto",
            display: "block",
            background: "#000",
            color: "#fff",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
