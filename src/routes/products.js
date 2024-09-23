import { Router } from 'express';
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  patchProductByIdController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productRouter = Router();

productRouter.get('/', ctrlWrapper(getAllProductsController));

productRouter.post('/', ctrlWrapper(createProductController));

productRouter.delete('/:productId', ctrlWrapper(deleteProductByIdController));

productRouter.patch('/:productId', ctrlWrapper(patchProductByIdController));

export default productRouter;
