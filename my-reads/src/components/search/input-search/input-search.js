import "./input-search.css";
import { useState } from "react";

export default function InputSearch({ onTextChange }) {
  const [searchText, setSearchText] = useState([]);

  const handleChange = (event) => {
    onTextChange(event.target.value);
    setSearchText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={searchText} onChange={handleChange}></input>
    </div>
  );
}
