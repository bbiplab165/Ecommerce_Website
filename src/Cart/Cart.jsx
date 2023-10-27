import React, { useContext, useEffect, useState } from "react";
import { data } from "../Home/Home"

import Style from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useContext(data)

  const navigate = useNavigate()
  const [items, setItems] = useState(cart)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setItems(cart.map(item => ({ ...item, count: 1 }))); 
  }, []);
  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    
    setTotal(totalPrice);
  }, [cart]);

  function handleClose() {

    navigate("/")
  }
  function handlePurchase() {
    console.log(cart);
  }

  return (
    <>
      {/* <Navigation /> */}
      <div className={Style.cartOverlay}>
        <div className={Style.desc}>
          <h2>Cart</h2>
          <h3>Items : {cart.length}</h3>
        </div>
        <div className={Style.items}>
          <h3>Item</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
        </div>
        <div>
          {items.map((i) => (
            <div className={Style.addedItems}>
              <h5>{i.title}</h5>
              <h5>$ {i.price}</h5>
              <h5>{i.count}</h5>
            </div>
          ))}
        </div>
        <div className={Style.total}>
          <h3 >Total : $ {total} </h3>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
