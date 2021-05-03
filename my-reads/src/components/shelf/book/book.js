import "./book.css";
import React, { useEffect, useState } from "react";
import SelectButton from "./select-button/select-button";
import * as api from "../../../services/BooksAPI";

export default function Book({ book, onBookStatusChanged }) {
  const [bookDetail, setBookDetail] = useState({});

  const handleBookStatusChanged = (shelf) => {
    onBookStatusChanged(book, shelf);
  };

  useEffect(() => {
    let mounted = true;
    api.get(book).then((data) => mounted && setBookDetail(data));

    return function cleanup() {
      mounted = false;
    };
  }, [book]);

  return (
    <div className={"book"}>
      {bookDetail.imageLinks && (
        <div className="image-container">
          <img src={bookDetail.imageLinks.thumbnail} alt=""></img>
          <SelectButton
            currentShelf={bookDetail.shelf}
            onBookStatusChanged={handleBookStatusChanged}
          ></SelectButton>
        </div>
      )}
      <p>{bookDetail.title}</p>
      {bookDetail.authors &&
        bookDetail.authors.map((author) => <span key={author}>{author}</span>)}
    </div>
  );
}
