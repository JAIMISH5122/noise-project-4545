import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Assets/CSS/Navbar.css"


export default function Navbar() {

  const cart = useSelector((store) => store);
  return (
    <nav className="navbar navbar-expand-lg bg-black hadow-sm">
      <div className="container ">

        {/* Logo */}
       <Link className="navbar-brand" to="/">
  <h3 style={{color:"white"}} >@noise</h3>
</Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav mx-auto">

  <li className="nav-item">
    <Link className="nav-link fw-semibold" to="/cat">
      Master series
    </Link>
  </li>

  <li className="nav-item ms-4">
    <Link className="nav-link fw-semibold" to="/personalisation">
      smart watches
    </Link>
  </li>

  <li className="nav-item ms-4">
    <Link className="nav-link fw-semibold" to="/corporate-orders">
      new launches
    </Link>
  </li>

  <li className="nav-item ms-4">
    <Link className="nav-link fw-semibold" to="/gifting-store">
     gift store
    </Link>
  </li>
</ul>

    <div className="d-flex align-items-center gap-3">
            
   <Link to="/login">          
  <button className="btn btn-dark rounded-pill">
    Login
  </button>
  </Link>
  {/* Cart Icon */}
 <Link to="/cart" className="btn btn-light position-relative">
  <FaShoppingCart size={22} />
 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
</span>
</Link>

 
</div>

        </div>
      </div>
    </nav>
  );
}