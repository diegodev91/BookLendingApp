import SelectButtonItem from "./select-button-item/select-button-item";
import "./select-button.css";
import React, { useState } from "react";
import { determineShelfTitle } from "../../../../helpers/shelf-utility";

export default function SelectButton({ currentShelf, onBookStatusChanged }) {
  const [visibility, toogleVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const BookStatusChanged = (e) => {
    setSelectedValue(e.target.value);
    onBookStatusChanged(e.target.value);
    console.log(selectedValue);
  };

  return (
    <div>
      <button
        onClick={() => toogleVisibility(!visibility)}
        className={visibility ? "hidden" : ""}
      >
        +
      </button>
      <select
        className={!visibility ? "hidden" : ""}
        onBlur={() => toogleVisibility(!visibility)}
        onChange={BookStatusChanged}
        value={currentShelf}
      >
        <SelectButtonItem
          disabled={true}
          value={""}
          text={"Move to..."}
        ></SelectButtonItem>
        {["currentlyReading", "read", "wantToRead", "none"].map((value) => (
          <SelectButtonItem
            key={value}
            disabled={false}
            value={value}
            text={determineShelfTitle(value)}
          ></SelectButtonItem>
        ))}
      </select>
    </div>
  );
}
