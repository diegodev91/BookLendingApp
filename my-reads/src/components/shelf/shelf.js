import "./shelf.css";
import React from "react";
import Book from "./book/book";

export default function Shelf({ shelfs, books }) {
  console.log(books.isArray);
  console.log(books);

  return (
    <div className={"shelf"}>
      {books &&
        books.map((book) => (
          <Book shelfs={shelfs} book={book} key={book.id}></Book>
        ))}
    </div>
  );
}
