import { ProductsCollection } from '../db/models/Product.js';

export const getAllProductsService = (userId) =>
  ProductsCollection.find({ userId });

export const createProductService = (productData) =>
  ProductsCollection.create(productData);

export const deleteProductByIdService = (productId, userId) =>
  ProductsCollection.findOneAndDelete({ _id: productId, userId });

export const updateProductService = (id, productData) =>
  ProductsCollection.findByIdAndUpdate(id, productData, { new: true });
