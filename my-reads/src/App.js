import "./App.css";
import * as api from "./services/BooksAPI";
import React, { useState, useEffect } from "react";
import ShelfList from "./components/shelf-list/shelf-list";
import SearchButton from "./components/search-button/search-button";
import { Switch, Route } from "react-router-dom";
import Search from "./components/search/search";

function App() {
  const [books, setBooks] = useState([]);
  const [booksFromSearch, setBookFromSearch] = useState([]);

  const shelfs = [
    { Id: "currentlyReading", Title: "Currently Reading" },
    { Id: "wantToRead", Title: "Want to Read" },
    { Id: "read", Title: "Read" },
    { Id: "none", Title: "None" },
  ];

  const handleSearchChanged = (text) => {
    api.search(text).then((data) => {
      setBookFromSearch(data);
      console.log(data);
    });
  };

  const handleBookStatusChanged = (book, shelf) => {
    api
      .update(book, shelf)
      .then(({ currentlyReading, wantToRead, read }) => {});
  };

  useEffect(() => {
    api.getAll().then((data) => {
      setBooks(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              shelfs={shelfs}
              books={booksFromSearch}
              onSearchChanged={handleSearchChanged}
              onBookStatusChanged={handleBookStatusChanged}
            ></Search>
          )}
        ></Route>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>My Reads</h1>
              {books.length ? (
                <ShelfList
                  shelfs={shelfs}
                  books={books}
                  onBookStatusChanged={handleBookStatusChanged}
                ></ShelfList>
              ) : (
                <span>Loading books...</span>
              )}

              <SearchButton></SearchButton>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
