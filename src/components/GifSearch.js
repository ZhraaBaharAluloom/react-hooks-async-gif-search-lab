import React from "react";

// Styles
const styles = {
  textAlign: "center",
};

const GifSearch = ({ search, setSearch, handleSubmit }) => {
  return (
    <form style={styles} onSubmit={handleSubmit}>
      <h5>Enter a search term</h5>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button>Find Gifs</button>
    </form>
  );
};

export default GifSearch;
