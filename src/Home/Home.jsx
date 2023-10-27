import React, { createContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Cart from "../Cart/Cart";

import Style from "./Home.module.css"

const data = createContext()

function Home() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  const [cart, setCart] = useState([])

  function handleAddCart(item) {
    if (cart.find((cartItem) => cartItem.title === item.title)) {
      alert("Item is already in your cart");
    } else {
      setCart([...cart, item]);
    }
  }

  return (
    <div>
      <data.Provider value={cart}>
        <Navigation />
      </data.Provider>
      <div className={Style.main}>
        {productsArr.map((i, index) => (
          <div className={Style.map} key={index}>
            <h2>{i.title}</h2>
            <img src={i.imageUrl} />
            <div className={Style.button}>
              <h2>$ {i.price}</h2>
              <button onClick={() => handleAddCart(i)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { data }
export default Home;
