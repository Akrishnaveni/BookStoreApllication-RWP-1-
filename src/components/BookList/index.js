import { Component } from "react";

import Header from "../Header";
import SearchInput from "../SearchInput";
import PriceRange from "../PriceRange";
import BookItem from "../BookItem";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

import "./index.css";

const apiStatusConstants ={
    initial: "INITIAL",
    inProgress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

let priceRangeExtreme = [0, 100];

class BookList extends Component {
  state = {
      apiStatus: apiStatusConstants.initial,
      booksData: [],
      priceRangeValue: [0, 0]
  }

  componentDidMount() {
    this.getBooks("");
  }

  getPriceRange = (booksData) => {
    let [minPrice, maxPrice] = [0, 0] 
    booksData.map((eachBook) => {
      const price = parseFloat(eachBook.price.slice(1))
      if (price < minPrice){
        minPrice = price;
      } else if (price > maxPrice){
        maxPrice = price;
      }
      return null;
    })
    priceRangeExtreme = [Math.round(minPrice), Math.round(maxPrice)]
    return priceRangeExtreme
  }

  filterBooksByPriceRange = () => {
    const {booksData, priceRangeValue} = this.state
    const filteredBooks = booksData.filter((eachBook) => {
      const price = parseFloat(eachBook.price.slice(1))
      const isPriceInRange = price >= priceRangeValue[0] && price <= priceRangeValue[1]
      return isPriceInRange
    })
    return filteredBooks
  }

  onChangeSliderPosition = (sliderPositions) => {
    this.setState({priceRangeValue: sliderPositions})
  }

  getBooks = async (searchQuery) => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    let bookListUrl = "";
    if (searchQuery === ""){
      bookListUrl = "https://api.itbook.store/1.0/new"
    }
    else{
      bookListUrl = `https://api.itbook.store/1.0/search/${searchQuery}`
    }

    const response = await fetch(bookListUrl)
    if (response.ok) {
        const jsonResponse = await response.json();
        const priceRangeExtreme = this.getPriceRange(jsonResponse.books)
        this.setState({apiStatus: apiStatusConstants.success, booksData: jsonResponse.books, priceRangeValue: priceRangeExtreme})
      } else if (response.status === 404) {
        this.setState({apiStatus: apiStatusConstants.failure})
    }
    console.log("fetched")
  };

  renderLoadingView(){
    return <Loader />
  }

  renderSuccessView(){
    const {priceRangeValue} = this.state
    return (
        <>
            <h1 className="book-items-heading">Books</h1>
            <PriceRange 
              sliderExtremes = {priceRangeExtreme} 
              sliderPositions = {priceRangeValue} 
              onChangeSliderPosition = {this.onChangeSliderPosition}/>
            <ul className="book-list-container">
                {this.filterBooksByPriceRange().map((eachBook) => (
                    <BookItem key = {eachBook.isbn13} bookItemDetails={eachBook}/>
                ))}    
            </ul>
            
        </>
    )
  }

  renderFailureView(){
    return  <ErrorMessage />
  }

  renderResults(){
    const {apiStatus} = this.state
    switch(apiStatus) {
        case apiStatusConstants.inProgress:
            return this.renderLoadingView();
        case apiStatusConstants.success:
            return this.renderSuccessView();
        default:
            return this.renderFailureView();
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="book-list-container">
          <div className="book-list-content-container">
            <SearchInput searchBooks = {this.getBooks}/>
            {this.renderResults()}
          </div>
        </div>
        

      </>
    );
  }
}

export default BookList;
