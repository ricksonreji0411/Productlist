import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  );
};

export default ProductCard;
