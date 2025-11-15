import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar will be displayed on all pages */}
      <Navbar />
      <Routes>

        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Cart page route - protected */}
        <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Login page route */}
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* Order History page route - protected */}
        <Route path="/orders" element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer will be displayed on all pages */}
       <Footer />
    </BrowserRouter>
  );
}

export default App;
