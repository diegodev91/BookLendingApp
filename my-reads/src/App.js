import "./App.css";
import * as api from "./services/BooksAPI";
import React, { useState, useEffect } from "react";
import ShelfList from "./components/shelf-list/shelf-list";
import SearchButton from "./components/search-button/search-button";
import { Switch, Route } from "react-router-dom";
import Search from "./components/search/search";

function App() {
  const [booksOnShelf, setBooksOnShelf] = useState({});

  const handleBookStatusChanged = (book, shelf) => {
    api.update(book, shelf).then((data) => {
      setBooksOnShelf(data);
    });
  };

  useEffect(() => {
    api.getAll().then((data) => {
      const shelfs = [...new Set(data.map(({ shelf }) => shelf))];

      const booksInShelf = {};

      for (const shelf of shelfs) {
        booksInShelf[shelf] = data
          .filter((book) => book.shelf === shelf)
          .map((book) => book.id);
      }
      setBooksOnShelf(booksInShelf);
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/search"
          render={() => (
            <Search onBookStatusChanged={handleBookStatusChanged}></Search>
          )}
        ></Route>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>My Reads</h1>
              {booksOnShelf ? (
                <ShelfList
                  booksOnShelf={booksOnShelf}
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
