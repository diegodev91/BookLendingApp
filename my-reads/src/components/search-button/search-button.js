import "./search-button.css";
import { Link } from "react-router-dom";

export default function SearchButton() {
  return (
    <Link className="search-link" to="/search">
      +
    </Link>
  );
}
