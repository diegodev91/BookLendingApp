import "./App.css";
import * as api from "./services/BooksAPI";
import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const shelfs = [
    { Id: "currentlyReading", Title: "Currently Reading" },
    { Id: "wantToRead", Title: "Want to Read" },
    { Id: "read", Title: "Read" },
  ];

  useEffect(() => {
    api.getAll().then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>My Reads</h1>
      {shelfs.map((shelf) => (
        <div key={shelf.Title}>
          <strong>{shelf.Title}</strong>
          {books
            .filter((book) => book.shelf === shelf.Id)
            .map((book) => (
              <span key={book.title}>{book.title}</span>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
