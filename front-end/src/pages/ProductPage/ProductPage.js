import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../actions/productActions';
import { useEffect } from 'react';
const ProductPage = () => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, []);

  return <div>{product.name}</div>;
};

export default ProductPage;
