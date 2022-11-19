import { Available, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const createRandomProduct = () => {
  return {
    name: faker.commerce.productName(),
    categoryId: Math.floor(Math.random() * 3) + 1,
    brand: faker.commerce.productAdjective(),
    price: parseInt(faker.commerce.price(100, 30000, 0)),
    available: faker.helpers.arrayElement([
      Available.IN_STORE,
      Available.WEB_ONLY,
      Available.UNAVAILABLE,
    ]),
    description: faker.commerce.productDescription(),
    discount: faker.helpers.maybe(() => "20%", { probability: 0.1 }) ?? null,
    type: faker.commerce.department(),
    view: parseInt(faker.random.numeric(2)),
    promoted: faker.helpers.maybe(() => true, { probability: 0.1 }) ?? false,
    type_info: faker.datatype.json(),
  };
};

async function main() {
  await prisma.$queryRaw`TRUNCATE TABLE Category`;
  await prisma.$queryRaw`TRUNCATE TABLE Product`;

  await prisma.category.createMany({
    data: [
      { name: "Motherboard" },
      { name: "CPU" },
      { name: "GPU" },
      { name: "PSU" },
      { name: "Hard Drive" },
    ],
  });

  await prisma.product.createMany({
    data: new Array(50).fill(0).map(() => createRandomProduct()),
  });
}

main();
