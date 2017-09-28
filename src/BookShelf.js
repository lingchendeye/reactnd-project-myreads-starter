import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    console.log('render BookShelf');
    const books = this.props.books;
		const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
		const readBooks = books.filter(book => book.shelf === 'read' );

		return (
		  <div className="list-books">
	  		<div className="list-books-title">
	  		  <h1>MyReads</h1>
	      </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BooksGrid
                  book={currentlyReadingBooks}
                  handleChange={this.props.onUpdateShelf}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
              	<BooksGrid
                  book={wantToReadBooks}
                  handleChange={this.props.onUpdateShelf}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              	<BooksGrid
                  book={readBooks}
                  handleChange={this.props.onUpdateShelf}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
		  </div>
		)
  }

}

export default BookShelf