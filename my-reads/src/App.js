import "./App.css";
import * as api from "./services/BooksAPI";
import React, { useState, useEffect } from "react";
import SelectButton from "./components/select-button/select-button";

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
  }, []);

  return (
    <div>
      <h1>My Reads</h1>
      <SelectButton shelfs={shelfs}></SelectButton>
    </div>
  );
}

export default App;
