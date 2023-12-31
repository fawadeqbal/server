import express from 'express';
import {   getProductById, getProducts, postProduct,getProductsByCategory,deleteProduct } from '../controller/products.js';
import { upload } from '../multer_config/multer_config.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/',upload.single('image'), postProduct);
router.get('/:id', getProductById);
router.post('/category',getProductsByCategory)
router.delete('/:id',deleteProduct)


export default router;
