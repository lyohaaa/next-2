import React from 'react';

const ProductCard = ({ category, image, altText, title, oldPrice, newPrice, starsImage }) => {
  return (
    <div className="card">
      <div className="border">
        <p>{category}</p>
      </div>
      <img src={image} alt={altText} className="product" />
      <h1>{title}</h1>
      <hr />
      <div className="price">
        <p>{oldPrice}</p>
        <h1>{newPrice}</h1>
        <img src={starsImage} alt="stars" />
      </div>
    </div>
  );
};

export default ProductCard;
