import React from 'react';
import ProductCards from './ProductCards';
import Arrow from '../pics/arrow.png';
import Photo from '../pics/broccoli.png';
import Banana from '../pics/banana.png';
import Nuts from '../pics/nuts.png';
import Bread from '../pics/bread.png';
import Tomato from '../pics/tomato.png';
import Beans from '../pics/beans.png';
import Hazelnut from '../pics/hazelnut.png';
import Egg from '../pics/eggs.png';
import Star from '../pics/Star.svg';
import CategoriesCard from './CategoriesCard';

const products = [
  { category: 'Vegetable', image: Photo, altText: 'broccoli', title: 'Calabrese Broccoli', oldPrice: '$20.00', newPrice: '$13.00', starsImage: Star },
  { category: 'Fresh', image: Banana, altText: 'banana', title: 'Fresh Banana Fruits', oldPrice: '$20.00', newPrice: '$14.00', starsImage: Star },
  { category: 'Millets', image: Nuts, altText: 'nuts', title: 'White Nuts', oldPrice: '$20.00', newPrice: '$15.00', starsImage: Star },
  { category: 'Vegetable', image: Tomato, altText: 'tomato', title: 'Vegan Red Tomato', oldPrice: '$20.00', newPrice: '$17.00', starsImage: Star },
  { category: 'Health', image: Beans, altText: 'beans', title: 'Mung Bean', oldPrice: '$20.00', newPrice: '$11.00', starsImage: Star },
  { category: 'Nuts', image: Hazelnut, altText: 'hazelnut', title: 'Brown Hazelnut', oldPrice: '$20.00', newPrice: '$12.00', starsImage: Star },
  { category: 'Fresh', image: Egg, altText: 'eggs', title: 'Eggs', oldPrice: '$20.00', newPrice: '$17.00', starsImage: Star },
  { category: 'Fresh', image: Bread, altText: 'bread', title: 'Zelco Suji Elaichi Rusk', oldPrice: '$20.00', newPrice: '$15.00', starsImage: Star },
];

const Categories = () => {
  return (
    <div className="categories">
      <p className="decorative-text">Categories</p>
      <h1 className="main-text">Our Products</h1>
      <div className="grids">
        <div className="rows">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <button className="btn-categories">
          <p>Load More</p>
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
