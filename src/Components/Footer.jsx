import React from "react";
import "../Assets/CSS/Footer.css";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscribe */}
        <div className="subscribe-section">
          <img
            src="https://storage.googleapis.com/ck-prod/logo-2020-09-29-125046-ef7a8637-e537-4a5f-beab-bb64b8b81693.jpg"
            alt="Noise"
            className="footer-logo"
          />

          <h2>Receive the Latest Updates from Noise</h2>

          <div className="subscribe-box">
            <input type="email" placeholder="Email Address" />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* First Row */}
        <div className="footer-grid">
          <div className="footer-links">
            <h3>SHOP BY FEATURES</h3>
            <a href="/">Smart Watches with Alexa</a>
            <a href="/">AMOLED Display Smart Watches</a>
            <a href="/">Round Dial Smart Watches</a>
            <a href="/">Metallic & Leather Smart Watches</a>
            <a href="/">BT Calling Smart Watches</a>
            <a href="/">Android Smart Watches</a>
          </div>

          <div className="footer-links">
            <h3>SHOP BY GENDER</h3>
            <a href="/">Smart Watches for Men</a>
            <a href="/">Smart Watches for Women</a>
            <a href="/">Smart Watches for Kids</a>
          </div>

          <div className="footer-links">
            <h3>SHOP BY PRICE</h3>
            <a href="/">Smart Watches Under ₹2000</a>
            <a href="/">Smart Watches Under ₹3000</a>
            <a href="/">Smart Watches Under ₹4000</a>
            <a href="/">Smart Watches Under ₹5000</a>
            <a href="/">Smart Watches Above ₹9000</a>
          </div>
        </div>

        <hr />

        {/* Second Row */}
        <div className="footer-grid">
          <div className="footer-links">
            <h3>SHOP BY FEATURES</h3>
            <a href="/">Wireless Earbuds</a>
            <a href="/">Gaming Earbuds</a>
            <a href="/">ANC Earbuds</a>
            <a href="/">Bluetooth Earbuds</a>
          </div>

          <div className="footer-links">
            <h3>SHOP BY PRICE</h3>
            <a href="/">Earbuds Under ₹1000</a>
            <a href="/">Earbuds Under ₹1500</a>
            <a href="/">Earbuds Under ₹2000</a>
            <a href="/">Earbuds Under ₹3000</a>
          </div>

          <div className="footer-links">
            <h3>SHOP BY TYPE</h3>
            <a href="/">Bluetooth Speakers</a>
            <a href="/">Power Banks</a>
            <a href="/">Chargers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}