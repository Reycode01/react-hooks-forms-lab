import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Function to add a new item to the list
  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* Pass the handleItemFormSubmit function as a prop */}
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;

