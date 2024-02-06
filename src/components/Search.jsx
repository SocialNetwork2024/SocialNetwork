import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for..."
        defaultValue=""
      />
      <button className="search-button" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
