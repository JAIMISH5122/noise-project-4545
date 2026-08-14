import React from 'react'

import { useDispatch,useSelector } from 'react-redux'  
import { decrementquantity, incrementquantity, removecartitem } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
 
import "../Assets/CSS/Cart.css";

export default function Cart() {

  const navigate = useNavigate();
  const data = useSelector((store) => store)
  const dispatch=useDispatch()

  const totalprice = data.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
return (
  <div className="cart-container">

    <div className="cart-left">
      <h2 className="cart-heading">Shopping Cart</h2>

      {data.map((el, i) => (
        <div className="cart-item" key={i}>
          <div className="cart-image">
            <img src={el.image} alt={el.name} />
          </div>

          <div className="cart-info">
            <h4>{el.name}</h4>

            <p className="cart-category">{el.category}</p>

            <h3>₹{el.price}</h3>

            <p className="stock">✓ In Stock</p>

            <div className="quantity">
              <button onClick={() => dispatch(decrementquantity(i))}>
                -
              </button>

              <span>{el.quantity}</span>

              <button onClick={() => dispatch(incrementquantity(i))}>
                +
              </button>
            </div>

            <button
  className="remove-btn"
  onClick={() => dispatch(removecartitem(i))}
>
  Remove
</button>
          </div>

          <div className="item-total">
            ₹{el.price * el.quantity}
          </div>
        </div>
      ))}
    </div>

    <div className="cart-right">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Items</span>
        <span>{data.length}</span>
      </div>

      <div className="summary-row">
        <span>Total</span>
        <span>₹{totalprice}</span>
      </div>

      <hr />

      <div className="summary-total">
        <span>Grand Total</span>
        <span>₹{totalprice}</span>
      </div>

   <button onClick={() => navigate("/checkout")}>
  Place Order
</button>
    </div>

  </div>
);
}