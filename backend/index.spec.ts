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

test("GET /products:id", async () => {
  const response = await api.get("/products/1");

  expect(response.status).toBe(200);
  expect(response.body).toBe<Product>;
});

test("GET /popular", async () => {
  const response = await api.get("/popular");
  const contents = response.body.map((r: any) => r.content);

  expect(contents).toHaveLength(10);
  expect(contents[0]).toBe<Product>;
});

test("GET /search", async () => {
  const response = await api.get("/search?name=fantastic");
  const contents = response.body.map((r: any) => r.content);

  expect(response.status).toBe(200);
  expect(contents[0]).toBe<Product>;
});

test("GET /categories", async () => {
  const response = await api.get("/categories");
  const contents = response.body.map((r: any) => r.content);

  expect(contents).toHaveLength(5);
});
