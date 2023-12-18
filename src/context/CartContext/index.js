import React from "react";

const CartContext = React.createContext({
    cartList: [],
    addToCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    deleteFromCart: () => {},
    resetCart: () => {}
})

export default CartContext