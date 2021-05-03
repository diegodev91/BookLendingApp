import "./shelf-list.css";
import React from "react";
import Shelf from "../shelf/shelf";
import { determineShelfTitle } from "../../helpers/shelf-utility";

export default function ShelfList({ booksOnShelf, onBookStatusChanged }) {
  return (
    <div className="shelf-list">
      {Object.getOwnPropertyNames(booksOnShelf).map((shelf) => (
        <div key={shelf}>
          <h2>{determineShelfTitle(shelf)}</h2>
          <Shelf
            className="shelf"
            books={booksOnShelf[shelf]}
            onBookStatusChanged={onBookStatusChanged}
          ></Shelf>
        </div>
      ))}
    </div>
  );
}
