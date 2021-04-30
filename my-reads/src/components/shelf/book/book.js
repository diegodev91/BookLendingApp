import "./book.css";
import React, { useEffect } from "react";
import SelectButton from "./select-button/select-button";
import * as api from "../../../services/BooksAPI";

export default function Book({ book, onBookStatusChanged }) {
  const handleBookStatusChanged = (shelf) => {
    onBookStatusChanged(book, shelf);
  };

  let bookDetail = {};

  useEffect(() => {
    api.get(book).then((data) => {
      bookDetail = { ...data };
    });
  }, []);

  return (
    <div className={"book"}>
      {bookDetail.imageLinks && (
        <img src={bookDetail.imageLinks.thumbnail} alt=""></img>
      )}
      <p>{bookDetail.title}</p>
      {bookDetail.authors &&
        bookDetail.authors.map((author) => <h6 key={author}>{author}</h6>)}
      <SelectButton
        currentShelf={bookDetail.shelf ? bookDetail.shelf : "none"}
        onBookStatusChanged={handleBookStatusChanged}
      ></SelectButton>
    </div>
  );
}
