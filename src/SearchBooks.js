import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
	static PropTypes = {
    onUpdateShelf: PropTypes.func.isRequired
	}

	state = {
		search: '',
		searchBooks:[]
	}

	updateSearch = (search) => {
		this.setState({ search: search });
    BooksAPI.search(search, 20).then(searchBooks => {
    	console.log(searchBooks);
    	this.setState({ searchBooks });
    })
	}

	render() {
		const {search } = this.state;
		console.log(this.state.searchBooks);

		return (
			<div className="search-books">
	      <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
	        <div className="search-books-input-wrapper">
	          <input
	          	type="text"
	          	placeholder="Search by title or author"
	          	value={search}
	          	onChange={(event) => this.updateSearch(event.target.value)}
	          />
	        </div>
	      </div>
	      <div className="search-books-results">
	        <BooksGrid
		        book={this.state.searchBooks}
		        handleChange={this.props.onUpdateShelf}
		       />
	      </div>
	    </div>
		)
	}
}

export default SearchBooks