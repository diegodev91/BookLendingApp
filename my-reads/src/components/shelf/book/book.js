import "./book.css";
import React, { useState } from "react";
import SelectButton from "./select-button/select-button";

export default function Book({ shelfs, book }) {
  return (
    <div className={"book"}>
      <img src={book.imageLinks.thumbnail} alt=""></img>
      <p>{book.title}</p>
      {book.authors.map((author) => (
        <h6 key={author}>{author}</h6>
      ))}
      <SelectButton shelfs={shelfs} currentShelf={book.shelf}></SelectButton>
    </div>
  );
}
