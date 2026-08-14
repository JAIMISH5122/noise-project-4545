import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Assets/CSS/Featuredproduct.css";
import Corporatebanner from "../Components/Corporatebanner";

export default function Corporate() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await axios.get("http://localhost:3001/giftingstore");
    setProducts(res.data);
  }

  return (
<>
    <Corporatebanner/>
    <div className="featured-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="featured-title" style={{marginLeft:"40%"}}>
          noice Gifting Products
        </h2>
      </div>

      <div className="featured-container">
        {products.map((el) => (
          <Link
            key={el.id}
            to={`/${el.category}`}
            className="featured-card text-decoration-none"
          >
            <div className="featured-offer-tag">
              {el.off}% OFF
            </div>

            <img src={el.image} alt={el.name} />

            <div className="featured-body">
              <h5>{el.name}</h5>

              <p className="featured-category">
                {el.category}
              </p>

              <h4>₹{el.price}</h4>

              <button className="btn btn-warning w-100">
                buy now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}