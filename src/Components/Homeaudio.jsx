import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Assets/CSS/Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await axios.get("http://localhost:3001/homeaudio");
    setProducts(res.data);
  }

  return (
    <div className="product-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="sale-title">
          Be limitless
        </h2>

        <a href="/" className="view-all">
        slide to view
        </a>
      </div>

      <div className="product-container">
        {products.map((el) => (
          <Link
            key={el.id}
            to={`/${el.category}`}
            className="product-card text-decoration-none"
          >
            <div className="offer-tag">{el.off}% OFF</div>

            <img src={el.image} alt={el.name} />

            <div className="card-body">
              <h5>{el.name}</h5>

              <p className="category">{el.category}</p>

              <h4>₹{el.price}</h4>

              <button className="btn btn-warning w-100">
                buy now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}