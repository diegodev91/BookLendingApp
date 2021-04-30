import "./shelf-list.css";
import React from "react";
import Shelf from "../shelf/shelf";

export default function ShelfList({ booksOnShelf, onBookStatusChanged }) {
  return (
    <div>
      {booksOnShelf.map(({ shelf, books }) => (
        <div key={shelf}>
          <h2>{shelf}</h2>
          <Shelf
            books={books}
            onBookStatusChanged={onBookStatusChanged}
          ></Shelf>
        </div>
      ))}
    </div>
  );
}
