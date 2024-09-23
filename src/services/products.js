import { ProductsCollection } from '../db/models/Product.js';

export const getAllProductsService = () => ProductsCollection.find();
export const createProductService = (productData) =>
  ProductsCollection.create(productData);
export const deleteProductByIdService = (productId) =>
  ProductsCollection.findByIdAndDelete(productId);
export const updateProductService = (id, productData) =>
  ProductsCollection.findByIdAndUpdate(id, productData, { new: true });
