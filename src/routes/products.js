import { Router } from 'express';
import { getAllProductsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productRouter = Router();

productRouter.get('/products', ctrlWrapper(getAllProductsController));

export default productRouter;
