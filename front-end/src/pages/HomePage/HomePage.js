import React from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import ProductCard from '../../components/ProductCard/ProductCard';
import './HomePage.css';
import { useEffect } from 'react';
import { getProducts } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="HomePage">
      <CarouselComponent />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="product-cards">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
