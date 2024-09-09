import { faker } from "@faker-js/faker";

export const createFakeProduct = () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  department: faker.commerce.department(),
  description: faker.commerce.productDescription(),
  adjective: faker.commerce.productAdjective(),
  material: faker.commerce.productMaterial(),
});
