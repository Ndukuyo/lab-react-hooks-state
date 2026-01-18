
import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, addToCart }) => {
  // Simple version - assumes data is always valid
  
  return (
    <div className="product-list">
      {/* Loop through products and create a card for each */}
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default ProductList