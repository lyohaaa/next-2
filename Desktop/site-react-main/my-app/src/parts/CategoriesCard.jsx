import React from 'react';

const CategoriesCard = () => {
  return (
    <div className="categories-card" style={{display: 'flex'}}>
      <div className="container-link-1">
        <button className='caterogies-card-button'>Organic Juice</button>
      </div>
      <div className="container-link-2">
        <button className='caterogies-card-button'>Organic Food</button>
      </div>
      <div className="container-link-3">
        <button className='caterogies-card-button'>Nuts Cookies</button>
      </div>
    </div>
  );
};

export default CategoriesCard;
