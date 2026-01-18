import React from 'react'

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  // Available categories for filtering
  const categories = ['All', 'Dairy', 'Fruits', 'Vegetables', 'Bakery', 'Beverages'];
  
  // Handle when user selects a different category
  const handleChange = (event) => {
    // Call the function passed from App.js with the new category
    if (onCategoryChange) {
      onCategoryChange(event.target.value);
    }
  };
  
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <select 
        value={selectedCategory} 
        onChange={handleChange}
        className="category-select"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter