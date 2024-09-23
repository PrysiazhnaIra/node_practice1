import { getAllProductsService } from '../services/products.js';
export const getAllProductsController = async (req, res) => {
  const products = await getAllProductsService();

  res.status(200).json({
    status: 200,
    message: `Successfully!`,
    data: products,
  });
};
