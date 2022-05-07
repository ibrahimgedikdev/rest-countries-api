import React from "react";

function SearchCountry({ setValue, setRegion, setCurrentPage }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value); 
          setCurrentPage(1)
          setRegion("All");
        }}
        placeholder="Search Country"
        className="search-country-input"
      />
    </div>
  );
}

export default SearchCountry;
