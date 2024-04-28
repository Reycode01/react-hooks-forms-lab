import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
    setError(""); // Clear error when the name changes
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemName.trim()) {
      setError("Please enter a name for the item.");
      return;
    }
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    // Clear form fields after successful submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={itemName}
          onChange={handleNameChange}
          aria-describedby="name-error"
        />
      </label>
      <p id="name-error" style={{ color: "red" }}>
        {error}
      </p>

      <label htmlFor="category">
        Category:
        <select
          id="category"
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;


