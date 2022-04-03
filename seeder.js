import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
connectDB();
import Product from './models/productModel.js';
import products from './data.js';

const setProducts = async () => {
  try {
    await Product.insertMany(products);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

setProducts();
