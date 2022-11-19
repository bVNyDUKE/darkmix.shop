import { Product } from "@prisma/client";
import supertest from "supertest";
import { app } from "./src/app";

const api = supertest(app);

test("GET /products", async () => {
  const response = await api.get("/products");
  const contents = response.body.map((r: any) => r.content);

  expect(contents).toHaveLength(50);
  expect(contents[0]).toBe<Product>;
});

test("GET /categories", async () => {
  const response = await api.get("/categories");
  const contents = response.body.map((r: any) => r.content);

  expect(contents).toHaveLength(5);
});
