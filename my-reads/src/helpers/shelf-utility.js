export const determineShelfTitle = (shelf) => {
  return shelf === "read"
    ? "Read"
    : shelf === "wantToRead"
    ? "Want to Read"
    : shelf === "currentlyReading"
    ? "Currently Reading"
    : "None";
};
