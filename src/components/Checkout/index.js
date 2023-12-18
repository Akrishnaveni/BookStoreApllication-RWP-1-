import {Component} from "react"
import { FaArrowLeft } from "react-icons/fa";
import {Link} from "react-router-dom"

import UserDetailsForm from "../UserDetailsForm";

import "./index.css"

const sample_data = {
    "title": "Designing Across Senses",
    "subtitle": "A Multimodal Approach to Product Design",
    "isbn13": "9781491954249",
    "price": "$27.59",
    "image": "https://itbook.store/img/books/9781491954249.png",
    "url": "https://itbook.store/books/9781491954249"
}

const {title, image, price} = sample_data

class Checkout extends Component {
    render(){
        return (
            <>
                <div className="checkout-page-container">
                    <div className = "checkout-banner">
                        <div className = "checkout-banner-content-container">
                            <div className="logo-container">
                                <Link to = "/" className="nav-link">
                                    <div className="logo">C</div>
                                    CROSSWORD
                                </Link>
                            </div>
                        </div>                                             
                    </div>
                    <div className = "checkout-form">
                        <div className = "checkout-content-container">
                            <h1 className = "checkout-heading">Checkout</h1>
                            <button className = "back-button">
                                <FaArrowLeft className = "back-icon"/>
                            </button>
                            <div className = "form-and-summary">
                                <UserDetailsForm/>
                                <div className = "summary-container">
                                    <div className = "summary-item-container">
                                        <img src={image} alt={title} className="summary-item-image" />
                                        <p className="summary-item-title">{title}</p>
                                        <p className="summary-item-price">{price}</p>
                                    </div>
                                    <div className = "summary-item-container">
                                        <p className="summary-total-title">Total</p>
                                        <p className="summary-total-price">{"% XYZ"}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>                                    
                </div>
            </>

        );
    }
}

export default Checkout