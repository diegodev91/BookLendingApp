import "./shelf-list.css";
import React from "react";
import Shelf from "../shelf/shelf";

export default function ShelfList({ shelfs, books, onBookStatusChanged }) {
  return (
    <div>
      {books &&
        shelfs
          .filter((shelf) => shelf.Id !== "none")
          .map((shelf) => (
            <div key={shelf.Title}>
              <h2>{shelf.Title}</h2>
              <Shelf
                shelfs={shelfs}
                books={books.filter((book) => book.shelf === shelf.Id)}
                onBookStatusChanged={onBookStatusChanged}
              ></Shelf>
            </div>
          ))}
    </div>
  );
}
