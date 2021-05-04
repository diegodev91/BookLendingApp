import "./input-search.css";
import { useState } from "react";

export default function InputSearch({ onTextChange }) {
  const [searchText, setSearchText] = useState([]);

  const handleChange = (event) => {
    onTextChange(event.target.value);
    setSearchText(event.target.value);
  };
  return (
    <div className="search-text-container">
      <input
        className="search-text"
        type="text"
        value={searchText}
        onChange={handleChange}
      ></input>
    </div>
  );
}
