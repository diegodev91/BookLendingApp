import SelectButtonItem from "./select-button-item/select-button-item";
import "./select-button.css";
import React, { useState } from "react";

export default function SelectButton({
  shelfs,
  currentShelf,
  onBookStatusChanged,
}) {
  const [visibility, toogleVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const BookStatusChanged = (e) => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
    onBookStatusChanged(e.target.value);
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
        {shelfs.map((x) => (
          <SelectButtonItem
            key={x.Id}
            disabled={false}
            value={x.Id}
            text={x.Title}
          ></SelectButtonItem>
        ))}
      </select>
    </div>
  );
}
