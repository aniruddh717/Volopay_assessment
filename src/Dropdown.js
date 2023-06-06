import React from "react";
import "./Dropdown.css";

const FilterDropdown = ({ filterType, setFilterType }) => {
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <div className="filter-dropdown">
      <label htmlFor="filter">Filter by card type:</label>
      <select id="filter" value={filterType} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="burner">Burner</option>
        <option value="subscription">Subscription</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
