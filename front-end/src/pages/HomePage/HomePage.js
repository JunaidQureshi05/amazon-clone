import React from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import ProductCard from '../../components/ProductCard/ProductCard';
import './HomePage.css';
import { useEffect } from 'react';
import { useState } from 'react';
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="HomePage">
      <CarouselComponent />

      <div className="product-cards">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
