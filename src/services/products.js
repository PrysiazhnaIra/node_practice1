import { ProductsCollection } from '../db/models/Product.js';

export const getAllProductsService = () => ProductsCollection.find();
