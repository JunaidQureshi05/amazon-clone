import express from 'express';
import Product from './models/productModel.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRouter from './routes/productRouter.js';
dotenv.config();
connectDB();
const app = express();
const port = 5000;

app.use('/api/products', productRouter);
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
