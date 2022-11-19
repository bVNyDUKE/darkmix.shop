import express from "express";
import cors from "cors";
import prisma from "./db";

const app = express();

app.use(cors());
app.get("/", async (_, res) => res.json("Hello world"));

app.get("/products", async (_, res) => {
  const products = await prisma.product.findMany();
  return res.json(products);
});

app.get("/categories", async (_, res) => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
});

export { app };
