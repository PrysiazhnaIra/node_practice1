import fs from "node:fs/promises";
import { FOLDER_PATH } from "../constants/path.js";

const getFiles = async () => {
  try {
    const dir = await fs.readdir(FOLDER_PATH);
    dir.forEach((elem) => console.log(elem));
  } catch (error) {
    console.log(error);
  }
};

getFiles();
