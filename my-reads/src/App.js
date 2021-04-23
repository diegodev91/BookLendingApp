import "./App.css";
import * as api from "./services/BooksAPI";
import React, { useState, useEffect } from "react";
import Shelf from "./components/shelf/shelf";

function App() {
  const [books, setBooks] = useState([]);

  const shelfs = [
    { Id: "currentlyReading", Title: "Currently Reading" },
    { Id: "wantToRead", Title: "Want to Read" },
    { Id: "read", Title: "Read" },
    { Id: "none", Title: "None" },
  ];

  useEffect(() => {
    api.getAll().then((data) => setBooks(data));
    console.log(books);
  }, []);

  return (
    <div>
      <h1>My Reads</h1>
      <Shelf shelfs={shelfs} books={books}></Shelf>
    </div>
  );
}

export default App;
