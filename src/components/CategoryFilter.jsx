import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
