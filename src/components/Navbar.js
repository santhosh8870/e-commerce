import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // Access user and logout from AuthContext
  const { user, logout } = useContext(AuthContext);

  // State to manage hamburger menu open/close
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">Sanizz</Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar turn1" : "bar"}></div>
        <div className={open ? "bar hide" : "bar"}></div>
        <div className={open ? "bar turn2" : "bar"}></div>
      </div>

      {/* Links */}
      <div className={open ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
        <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>

        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          // Show Login link if not logged in
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
