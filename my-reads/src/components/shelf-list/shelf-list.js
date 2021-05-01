import "./shelf-list.css";
import React from "react";
import Shelf from "../shelf/shelf";

export default function ShelfList({ booksOnShelf, onBookStatusChanged }) {
  console.log(booksOnShelf.read);
  const determineShelfTitle = (shelf) => {
    return shelf === "read"
      ? "Read"
      : shelf === "wantToRead"
      ? "Want to Read"
      : "Currently Reading";
  };
  return (
    <div>
      {["read", "currentlyReading", "wantToRead"].map((shelf) => (
        <div key={shelf}>
          <h2>{determineShelfTitle(shelf)}</h2>
          <Shelf
            books={booksOnShelf[shelf]}
            onBookStatusChanged={onBookStatusChanged}
          ></Shelf>
        </div>
      ))}
    </div>
  );
}
