import "./search.css";
import InputSearch from "./input-search/input-search";
import Shelf from "../shelf/shelf";

export default function Search({ shelfs, books }) {
  return (
    <div>
      <InputSearch></InputSearch>
      <Shelf shelfs={shelfs} books={books}></Shelf>
    </div>
  );
}
