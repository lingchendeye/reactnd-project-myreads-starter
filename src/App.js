import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.updateShelf = this.updateShelf.bind(this);
  }
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  updateShelf(bookID, shelf) {
    BooksAPI.get(bookID).then((book) => {
      BooksAPI.update(book,shelf).then(
        BooksAPI.getAll().then(books => {
          this.setState({ books });
    }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            onUpdateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
