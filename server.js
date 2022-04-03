import express from 'express';
import Product from './models/productModel.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app = express();
const port = 5000;

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
