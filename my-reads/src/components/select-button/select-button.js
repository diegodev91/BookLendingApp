import SelectButtonItem from "../select-button-item/select-button-item";
import "./select-button.css";
import React, { useState } from "react";

export default function SelectButton(props) {
  const [visibility, toogleVisibility] = useState(false);

  return (
    <div>
      <button onClick={() => toogleVisibility(!visibility)}>+</button>
      <select className={!visibility ? "hidden" : ""}>
        <SelectButtonItem
          disabled={true}
          value={""}
          text={"Move to..."}
        ></SelectButtonItem>
        {props.shelfs.map((x) => (
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
