import React, { useState, useContext, useEffect } from "react";
import Style from "./Navigation.module.css";
import Cart from "../Cart/Cart"

import { data } from "../Store/Store"
import { useNavigate } from "react-router-dom";

function Navigation() {
    const [count, setCount] = useState(0);
    const [showCart, setShowCart] = useState(false)
    const [clicked, setClicked] = useState(false)

    const cart = useContext(data)

    useEffect(() => {
        if(cart){
            setCount(cart.length)
        }
    }, [cart])

    const navigate = useNavigate()
    function handleCart() {
        // navigate("/Cart")
        setShowCart(!showCart);
        setClicked(!clicked)
    }
    function handleHome() {
        navigate("/")
    }
    function handleStore() {
        navigate("/Store")
    }
    function handleAbout() {
        navigate("/About")
    }
    return (
        <div className={Style.main}>
            <div className={Style.pages}>
                <h3 onClick={handleHome}>Home</h3>
                <h3 onClick={handleStore}>Store</h3>
                <h3 onClick={handleAbout}>About</h3>
                {clicked==false?(<button onClick={handleCart}>Cart <span>{count}</span></button>):(<button onClick={handleCart}>Close</button>)}
                {showCart && <Cart />}
            </div>
        </div>
    );
}

export default Navigation;
