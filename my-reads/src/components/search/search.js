import "./search.css";
import InputSearch from "./input-search/input-search";
import Shelf from "../shelf/shelf";
import BackButton from "./back-button/back-button";

export default function Search({
  shelfs,
  books,
  onSearchChanged,
  onBookStatusChanged,
}) {
  const handleTextChanged = (text) => {
    onSearchChanged(text);
  };

  return (
    <div>
      <BackButton></BackButton>
      <InputSearch onTextChange={handleTextChanged}></InputSearch>
      {books && books.length ? (
        <Shelf
          shelfs={shelfs}
          books={books}
          onBookStatusChanged={onBookStatusChanged}
        ></Shelf>
      ) : (
        <span>Empty search...</span>
      )}
    </div>
  );
}
