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
    api.search(text).then((data) => setBookFromSearch(data));
    console.log(booksFromSearch);
  };

  useEffect(() => {
    api.getAll().then((data) => setBooks(data));
    api.search().then((data) => setBookFromSearch(data));
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
            ></Search>
          )}
        ></Route>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>My Reads</h1>
              <ShelfList shelfs={shelfs} books={books}></ShelfList>
              <SearchButton></SearchButton>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
