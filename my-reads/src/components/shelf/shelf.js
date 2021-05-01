import "./shelf.css";
import React from "react";
import Book from "./book/book";

export default function Shelf({ books, onBookStatusChanged }) {
  console.log(books);
  return (
    <div className={"shelf"}>
      {books &&
        books.map((book) => (
          <Book
            book={book}
            key={book}
            onBookStatusChanged={onBookStatusChanged}
          ></Book>
        ))}
    </div>
  );
}
