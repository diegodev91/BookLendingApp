import "./search.css";
import InputSearch from "./input-search/input-search";
import Shelf from "../shelf/shelf";
import BackButton from "./back-button/back-button";
import { useState } from "react";
import * as api from "../../services/BooksAPI";

export default function Search({ books, onBookStatusChanged }) {
  const [booksFromSearch, setBookFromSearch] = useState([]);

  const handleTextChanged = (text) => {
    api.search(text).then((data) => {
      setBookFromSearch(data);
      console.log(data);
    });
  };

  return (
    <div>
      <BackButton></BackButton>
      <InputSearch onTextChange={handleTextChanged}></InputSearch>
      {books && books.length ? (
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
