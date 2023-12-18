import {Link} from "react-router-dom"
import "./index.css"

const BookItem = (props) => {
    const {bookItemDetails} = props
    const {title, subtitle, image, price, isbn13} = bookItemDetails
    return (
        <>
            <li key={isbn13} className = "book-item-container">
                <Link to = {`/books/${isbn13}`} className = "book-item-nav-link">
                    <img src={image} alt={title} className="book-image" />
                    <h1 className="book-title">{title}</h1>
                    <p className="book-subtitle">{subtitle}</p>
                    <p className="book-price">{price}</p>
                </Link>
            </li>
        </>

    )
}

export default BookItem