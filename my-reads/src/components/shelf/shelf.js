import "./shelf.css";
import React, { useState } from "react";
import Book from "./book/book";

export default function Shelf({ shelfs, books }) {
  return (
    <div className={"shelf"}>
      {books.map((book) => (
        <Book shelfs={shelfs} book={book} key={book.id}></Book>
      ))}
    </div>
  );
}
