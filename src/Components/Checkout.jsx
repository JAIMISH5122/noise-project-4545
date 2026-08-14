import React, { useState } from "react";
import "../Assets/CSS/Checkout.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/Action";

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCity,
  FaMapPin,
  FaMoneyBillWave,
  FaWallet,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

export default function Checkout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const arrivalDate = new Date();
  arrivalDate.setDate(arrivalDate.getDate() + 3);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(clearCart());

    alert("🎉 Order Placed Successfully!");

    navigate("/");
  };

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <FaShieldAlt className="header-icon" />
        <div>
          <h2>Secure Checkout</h2>
          <p>Your data is safe & encrypted.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="checkout-grid">

          {/* Shipping Details */}

          <div className="checkout-card">

            <h3>📍 Shipping Details</h3>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaPhoneAlt />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box textarea-box">
              <FaMapMarkerAlt />
              <textarea
                name="address"
                placeholder="Shipping Address"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="row">

              <div className="input-box">
                <FaCity />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <FaMapPin />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

          </div>

          {/* Payment */}

          <div className="checkout-card">

            <h3>💳 Payment Method</h3>

            <label className="payment-card">

              <input
                type="radio"
                name="payment"
                value="cod"
                checked={user.payment === "cod"}
                onChange={handleChange}
              />

              <FaMoneyBillWave className="payment-icon" />

              <div>

                <h4>Cash On Delivery</h4>

                <p>Pay after delivery.</p>

              </div>

            </label>

            <label className="payment-card">

              <input
                type="radio"
                name="payment"
                value="upi"
                checked={user.payment === "upi"}
                onChange={handleChange}
              />

              <FaWallet className="payment-icon" />

              <div>

                <h4>UPI Payment</h4>

                <p>Google Pay, PhonePe, Paytm</p>

              </div>

            </label>
{/* 
          <label className="payment-card">

  <input
    type="radio"
    name="payment"
    value="upi"
    checked={user.payment === "upi"}
    onChange={handleChange}
  />

  <FaWallet className="payment-icon" />

  <div>
    <h4>UPI Payment</h4>
    <p>Google Pay, PhonePe, Paytm</p>
  </div>

</label> */}

{user.payment === "upi" && (
  <div className="upi-box">

    <h4>Scan QR Code</h4>

    <img
      src="/images/upi-qr.png"
      alt="UPI QR"
      className="upi-qr"
    />

    <p>
      Scan using Google Pay, PhonePe or Paytm
    </p>

  </div>
)}


          </div>

        </div>

        {/* Bottom */}

        <div className="bottom-box">

          <div className="delivery-card">

            <FaTruck className="truck-icon" />

            <div>

              <h3>Expected Delivery</h3>

              <h2>{arrivalDate.toDateString()}</h2>

              <p>Your order will arrive within 3 days.</p>

            </div>

          </div>

          <div className="secure-card">

            <FaShieldAlt className="shield-icon" />

            <div>

              <h3>100% Secure Payment</h3>

              <p>Your payment information is encrypted.</p>

            </div>

          </div>

        </div>

        <button className="place-order-btn">

          Place Order & Continue Shopping

        </button>

      </form>

    </div>
  );
}