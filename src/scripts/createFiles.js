import fs from "node:fs/promises";
import { DB_PATH, FOLDER_PATH } from "../constants/path.js";
import path from "node:path";

const createFiles = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data);

    products.forEach((elem, index) => {
      const pathToFile = path.join(FOLDER_PATH, `${index + 1}.json`);

      fs.writeFile(pathToFile, JSON.stringify(elem, null, 2), "utf-8");
    });
  } catch (error) {
    console.log(error);
  }
};

createFiles();
