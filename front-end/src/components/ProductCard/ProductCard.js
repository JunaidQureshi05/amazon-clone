import React from 'react';
import Rating from '../Rating/Rating';
import './ProductCard.css';
import { Link } from 'react-router-dom';
const ProductCard = ({ name, price, rating, numReviews, description, _id }) => {
  function formatPrice(value) {
    let val = (value / 1).toFixed(2);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <div div className="Product-Card">
      <h1 className="name">{name}</h1>
      <Link to={`/products/${_id}`}>
        {' '}
        <img
          src="https://m.media-amazon.com/images/I/71tpxtLD0aL._SX679_.jpg"
          alt=""
        />
      </Link>

      <p className="description">{description}</p>
      <Rating
        value={rating}
        text={`from ${numReviews} users`}
        color="#fa9c1c"
      />
      <div className="price">
        <span className="price-logo">₹</span>
        <span className="amount">{formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
