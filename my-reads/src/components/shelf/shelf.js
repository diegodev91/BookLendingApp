import "./shelf.css";
import React from "react";
import Book from "./book/book";

export default function Shelf({ shelfs, books, onBookStatusChanged }) {
  return (
    <div className={"shelf"}>
      {books &&
        books.map((book) => (
          <Book
            shelfs={shelfs}
            book={book}
            key={book.id}
            onBookStatusChanged={onBookStatusChanged}
          ></Book>
        ))}
    </div>
  );
}
