import { Router } from 'express';
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  patchProductByIdController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const productRouter = Router();

productRouter.get('/', authenticate, ctrlWrapper(getAllProductsController));

productRouter.post('/', authenticate, ctrlWrapper(createProductController));

productRouter.delete(
  '/:productId',
  authenticate,
  ctrlWrapper(deleteProductByIdController),
);

productRouter.patch(
  '/:productId',
  authenticate,
  ctrlWrapper(patchProductByIdController),
);

export default productRouter;
