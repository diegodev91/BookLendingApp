import "./back-button.css";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <button>
      <Link to="/">Back</Link>
    </button>
  );
}
