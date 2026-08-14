import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { myAction } from '../Redux/Action'
import "../Assets/CSS/Productdetail.css";

export default function Productdetail() {

  const [state, setState] = useState({})
  const { category, id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const abc = async () => {
    const xyz = await axios.get(`http://localhost:3001/${category}/${id}`)
    setState(xyz.data)
  }

  useEffect(() => {
    abc()
  }, [category, id, abc])

  function Addtocart() {
    const loginUser = localStorage.getItem("user");

    if (!loginUser) {
      alert("Please Login First");
      navigate("/login");
      return;
    }
    navigate("/");
    dispatch(myAction(state));
    alert("Product Added to Cart");
  }

  const handleBuyNow = () => {
    const loginUser = localStorage.getItem("user");

    if (!loginUser) {
      alert("Please Login First");
      navigate("/login");
      return;
    }
    dispatch(myAction(state));
    navigate("/cart");
  };

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={state.image} alt={state.name} />
      </div>

      <div className="product-details">
        <h1>{state.name}</h1>

        <div className="rating">
          {getStars(state.rating)} ({state.rating})
        </div>

        <h2 className="price">
          ₹{state.price}
        </h2>

        <p className="offer">
          Inclusive of all taxes
        </p>

        <p className="stock">
          {state.stock ? "✔ In Stock" : "❌ Out of Stock"}
        </p>

        <hr />

        <h5>Product Features</h5>

        <ul>
          <li>Premium Quality</li>
          <li>1 Year Warranty</li>
          <li>Fast Delivery</li>
          <li>Easy Returns</li>
        </ul>

        <div className="btn-group-custom">
          <button
            className="cart-btn"
            onClick={Addtocart}
            disabled={!state.stock}
          >
            Add to Cart
          </button>

          <button
            className="buy-btn"
            onClick={handleBuyNow}
            disabled={!state.stock}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}