import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  // State to manage the search text
  const [searchText, setSearchText] = useState(search); // Set the initial value using the 'search' prop

  // Function to handle search text changes
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    // Pass the search text to the parent component
    onSearchChange(searchText);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText} // Make the input a controlled component
        onChange={handleSearchChange} // Call the handleSearchChange function when input changes
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

