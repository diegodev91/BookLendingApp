import "./search.css";
import InputSearch from "./input-search/input-search";
import Shelf from "../shelf/shelf";
import BackButton from "./back-button/back-button";
import { useState } from "react";
import * as api from "../../services/BooksAPI";

export default function Search({ onBookStatusChanged }) {
  const [booksFromSearch, setBookFromSearch] = useState([]);

  const handleTextChanged = (text) => {
    api.search(text).then((data) => {
      data && data.length && setBookFromSearch(data.map((book) => book.id));
    });
  };

  return (
    <div>
      <div className="search-container">
        <BackButton></BackButton>
        <InputSearch onTextChange={handleTextChanged}></InputSearch>
      </div>
      {booksFromSearch && booksFromSearch.length ? (
        <Shelf
          books={booksFromSearch}
          onBookStatusChanged={onBookStatusChanged}
        ></Shelf>
      ) : (
        <span>Empty search...</span>
      )}
    </div>
  );
}
