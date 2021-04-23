import "./shelf-list.css";
import React from "react";
import Shelf from "../shelf/shelf";

export default function ShelfList({ shelfs, books }) {
  return (
    <div>
      {shelfs
        .filter((shelf) => shelf.Id !== "none")
        .map((shelf) => (
          <div key={shelf.Title}>
            <h2>{shelf.Title}</h2>
            <Shelf
              shelfs={shelfs}
              books={books.filter((book) => book.shelf === shelf.Id)}
            ></Shelf>
          </div>
        ))}
    </div>
  );
}
