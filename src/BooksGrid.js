import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BooksGrid extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  static PropTypes = {
		book: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
  }
  handleChange(e) {
    console.log(this);
    const value = e.target.value;
    const bookID = e.target.getAttribute('data-id');
    this.props.handleChange(bookID, value);
  }

  render() {
  	const showingBook = this.props.book;
  	return (
  		<ol className="books-grid">
        { showingBook.map(book => (
  				<li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                	width: 128,
                	height: 194,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}>
                </div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} data-id={book.id} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}
export default BooksGrid