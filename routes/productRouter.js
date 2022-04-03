import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
});
export default router;
