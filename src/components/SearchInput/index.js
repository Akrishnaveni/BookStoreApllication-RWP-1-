import {Component} from "react"
import {FaSearch} from "react-icons/fa"

import "./index.css"

class SearchInput extends Component{
    state = {
        searchInputValue: ""
    }

    onChangeSearchInput = (event) => {
        this.setState({searchInputValue: event.target.value})
    }

    onSubmitSearchInput = (event) =>{
        event.preventDefault();
        const {searchBooks} = this.props;
        const {searchInputValue} = this.state
        searchBooks(searchInputValue)
    }

    render(){
        const {searchInputValue} = this.state
        return (
            <form className = "input-container" onSubmit={this.onSubmitSearchInput}>
                <input 
                    type = "text"
                    value = {searchInputValue}
                    placeholder = "Search here"
                    className = "search-input"
                    onChange = {this.onChangeSearchInput}
                />
                <button className = "search-button"> 
                    <FaSearch className="search-icon"/>
                </button>
            </form>
        )
    }
}

export default SearchInput