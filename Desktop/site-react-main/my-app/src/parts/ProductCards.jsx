import React from 'react';

const ProductCards = ({ category, imageSrc, title, oldPrice, newPrice, stars }) => {
  return (
    <div className="card">
      <div className="border">
        <p>{category}</p>
      </div>
      <img src={imageSrc} alt={title} className="product" />
      <h1>{title}</h1>
      <hr />
      <div className="price">
        <p>{oldPrice}</p>
        <h1>{newPrice}</h1>
        <img src={stars} alt="stars" />
      </div>
    </div>
  );
};

export default ProductCards;
