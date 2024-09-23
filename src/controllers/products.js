import createHttpError from 'http-errors';
import {
  createProductService,
  deleteProductByIdService,
  getAllProductsService,
  updateProductService,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();

  res.status(200).json({
    status: 200,
    message: `Successfully found products!`,
    data: products,
  });
};

export const createProductController = async (req, res) => {
  const newProduct = await createProductService(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a product!`,
    data: newProduct,
  });
};

export const deleteProductByIdController = async (req, res) => {
  const productId = req.params.productId;
  const deletedProduct = await deleteProductByIdService(productId);

  if (!deletedProduct) {
    throw createHttpError(404, 'Product was not found!');
  }

  //   res.status(204).end(); //or
  res.sendStatus(204);
};

export const patchProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const { body } = req;

  const updatedProduct = await updateProductService(productId, body);
  if (!updatedProduct) {
    throw createHttpError(404, 'Product was not found!');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully patched a product!`,
    data: updatedProduct,
  });
};
