import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Function to handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Function to handle search text change
  function handleSearchChange(searchText) {
    setSearchText(searchText);
  }

  // Define state to hold the list of items
  const [shoppingItems, setShoppingItems] = useState(items);

  // Function to add a new item to the list
  const handleItemFormSubmit = (newItem) => {
    setShoppingItems([...shoppingItems, newItem]);
  };

  // Filter items based on selected category and search text
  const itemsToDisplay = shoppingItems.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    if (searchText.trim() !== "" && !item.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="ShoppingList">
      {/* Pass the handleItemFormSubmit function as a prop */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      {/* Pass handleCategoryChange and handleSearchChange as props */}
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

