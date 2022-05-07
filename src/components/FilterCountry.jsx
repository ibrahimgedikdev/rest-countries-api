import React from "react";

function FilterCountry({
  setCurrentPage,
  setRegion,
  setValue,
  region
}) {
  return (
    <select
      className="filter-country"
      defaultValue={region}
      onChange={
        (e) => {
          setCurrentPage(1)
          setRegion(e.target.value)
          setValue("")
        }
      }
    >
      <option value="" disabled={true}> Filter By Region</option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Ocenia</option>
    </select>
  );
}

export default FilterCountry;
