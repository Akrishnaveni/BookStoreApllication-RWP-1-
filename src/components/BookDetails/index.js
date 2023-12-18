import { Component } from "react";

import Header from "../Header";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

import "./index.css";
import CartContext from "../../context/CartContext";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class BookDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.inProgress,
    bookDetailsData: {},    
  };

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const bookUrl = `https://api.itbook.store/1.0/books/${id}`;
    console.log(bookUrl);

    const response = await fetch(bookUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      this.setState({
        apiStatus: apiStatusConstants.success,
        bookDetailsData: jsonResponse,
      });
    } else if (response.status === 404) {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
    console.log("fetched");
  };

  renderSuccessView() {
    const { bookDetailsData } = this.state;
    const {
      title,
      image,
      subtitle,
      year,
      authors,
      price,
      desc,
      rating,
      publisher,
      isbn10,
      isbn13,
      pages,
    } = bookDetailsData;


    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, addToCart } = value;
          let isAddedToCart = cartList.find(eachCartItem => eachCartItem.isbn13 === this.state.bookDetailsData.isbn13)
          const onClickAddToCart = () => {
            addToCart({...this.state.bookDetailsData, quantity: 1})
          }
          return (
            <div className="book-details-container">
              <div className="book-details-content-container">
                <div className="book-basic-details-container">
                  <div className="book-details-image-container">
                    <img
                      src={image}
                      alt={title}
                      className="book-details-image"
                    />
                  </div>
                  <div className="book-other-basic-details">
                    <h1 className="book-details-heading book-details-title">
                      {title}
                    </h1>
                    <p className="book-details-subtitle">{subtitle}</p>
                    <p className="book-details-author">{authors}</p>
                    <p className="book-details-release-year">
                      Publication Year: {year}
                    </p>
                    <hr className="horizontal-rule display" />
                    <p className="book-details-price">{price}</p>
                    <div className="buttons-container">
                    <button
                        className="book-details-button"
                        onClick={onClickAddToCart}
                        disabled={isAddedToCart}
                      >
                        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="horizontal-rule" />
                <div>
                  <h1 className="book-details-heading">Product Description</h1>
                  <p>{desc}</p>
                </div>
                <hr className="horizontal-rule" />
                <div>
                  <h1 className="book-details-heading">Product Details</h1>
                  <table>
                    <tbody>
                      <tr>
                        <th>Title</th>
                        <td>{title}</td>
                      </tr>
                      <tr>
                        <th>Subtitle</th>
                        <td>{subtitle}</td>
                      </tr>
                      <tr>
                        <th>Authors</th>
                        <td>{authors}</td>
                      </tr>
                      <tr>
                        <th>Publisher</th>
                        <td>{publisher}</td>
                      </tr>
                      <tr>
                        <th>ISBN10</th>
                        <td>{isbn10}</td>
                      </tr>
                      <tr>
                        <th>ISBN13</th>
                        <td>{isbn13}</td>
                      </tr>
                      <tr>
                        <th>Pages</th>
                        <td>{pages}</td>
                      </tr>
                      <tr>
                        <th>Year</th>
                        <td>{year}</td>
                      </tr>
                      <tr>
                        <th>Rating</th>
                        <td>{rating}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="horizontal-rule" />
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }

  renderBookDetails() {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        return this.renderSuccessView();
      default:
        return <ErrorMessage />;
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderBookDetails()}
      </>
    );
  }
}

export default BookDetails;
