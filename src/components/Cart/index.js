import { Link } from "react-router-dom"

import Header from "../Header";
import CartItem from "../CartItem";

import CartContext from "../../context/CartContext";

import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, resetCart, deleteFromCart } = value;
      const isCartEmpty = cartList.length === 0
      let total = 0
      if (!isCartEmpty) {
         cartList.map((eachCartItem) => {
          return total += parseFloat(eachCartItem.price.slice(1))
          }
        )
      }
      console.log(total)

      return (
        <>
          <Header />
          <div className="cart-page-container">
            <div className="cart-content-container">
              <h1 className="cart-heading"> {isCartEmpty? "Your cart is empty!" : "Your Cart"} </h1>
              <div className="cart-container">
                {cartList.map((cartItem) => (
                  <CartItem key={cartItem.isbn13} cartItemDetails={cartItem} handleDelete = {deleteFromCart}/>
                ))}
                {isCartEmpty ? 
                <Link to = '/books' className="continue-shopping-button-link">
                  <button className="checkout-button remove-button" >Continue Shopping</button>
                </Link> 
                : <button className="checkout-button remove-button" onClick={resetCart}>Remove all</button>}
              </div>
            </div>
            <div className="order-content-container">
              <h1 className="order-title">Order Summary</h1>
              <div className="order-summary-container">
                <div className="order-amount-container">
                  <p className="order-amount">Amount Payable:</p>
                  <h1 className="cart-price">{`$${total}`}</h1>
                </div>
                <p className="order-text">(inclusive of all taxes)</p>
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
