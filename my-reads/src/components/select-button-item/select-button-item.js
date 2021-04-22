import "./select-button-item.css";
import React from "react";

export default function SelectButtonItem(props) {
  return (
    <option disabled={props.disabled} value={props.value}>
      {props.text}
    </option>
  );
}
