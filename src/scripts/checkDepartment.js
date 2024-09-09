import fs from "node:fs/promises";
import { DB_PATH } from "../constants/path.js";

const checkDepartment = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data);

    const elemDepartment = products[0].department;
    const result = products.every(
      ({ department }) => department === elemDepartment
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

checkDepartment("Rubber");
