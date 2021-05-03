import SelectButtonItem from "./select-button-item/select-button-item";
import "./select-button.css";
import React, { useState, useEffect } from "react";
import { determineShelfTitle } from "../../../../helpers/shelf-utility";

export default function SelectButton({
  currentShelf = "none",
  onBookStatusChanged,
}) {
  const [visibility, toogleVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const BookStatusChanged = (e) => {
    setSelectedValue(e.target.value);
    onBookStatusChanged(e.target.value);
  };

  useEffect(() => {
    let mounted = true;
    mounted && setSelectedValue(currentShelf);

    return function cleanup() {
      mounted = false;
    };
  }, [currentShelf]);

  return (
    <div className="button-container">
      <button
        onClick={() => toogleVisibility(!visibility)}
        className={visibility ? "hidden" : ""}
      >
        <i class="arrow down"></i>
      </button>
      <select
        className={!visibility ? "hidden" : ""}
        onBlur={() => toogleVisibility(!visibility)}
        onChange={BookStatusChanged}
        value={selectedValue}
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
