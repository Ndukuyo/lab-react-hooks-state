import React from 'react'
import styles from '../styles/ProductCard.module.css'


const ProductCard = ({ product, addToCart }) => {
  // This function is called when Add to Cart button is clicked
  const handleAddToCart = () => {
    // Check if addToCart function exists and product has a name
    if (addToCart && product && product.name) {
      addToCart(product.name);
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard