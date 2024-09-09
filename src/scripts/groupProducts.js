import fs from "node:fs/promises";
import { DB_PATH } from "../constants/path.js";

const groupProducts = async () => {
  const groupedProducts = {};
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data);

    products.forEach(({ material }) => {
      groupedProducts[material] = [];
    });

    products.forEach(({ name, material }) => {
      groupedProducts[material] = [...groupedProducts[material], name];
    });
    console.log(groupedProducts);
  } catch (error) {
    console.log(error);
  }
};

groupProducts();
