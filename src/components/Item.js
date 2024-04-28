import React from "react";

function Item({ name, category, isInCart, onToggleCart }) {
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={onToggleCart}>
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;

