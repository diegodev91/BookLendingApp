import "./shelf.css";
import React from "react";
import Book from "./book/book";

export default function Shelf({ shelfs, books }) {
  return (
    <div className={"shelf"}>
      {books &&
        books.isArray &&
        books.map((book) => (
          <Book shelfs={shelfs} book={book} key={book.id}></Book>
        ))}
    </div>
  );
}
