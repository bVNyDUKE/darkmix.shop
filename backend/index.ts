import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.get("/", async (_, res) => res.json("Hello world"));

app.get("/products", async (_, res) => {
  const products = await prisma.product.findMany();
  console.log(products);
  return res.json(products);
});

app.get("/categories", async (_, res) => {
  const categories = await prisma.category.findMany();
  console.log(categories);
  return res.json(categories);
});

app.listen(8000, () => console.log("App started on port 8000"));
