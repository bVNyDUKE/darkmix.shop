import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import prisma from "./db";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(cors());

app.get("/", async (_, res) => res.json("Hello world"));

app.get("/products", async (req, res) => {
  const take = req.query.limit
    ? parseInt(req.query.limit.toString())
    : undefined;

  const products = await prisma.product.findMany({
    orderBy: {
      view: "desc",
    },
    take,
  });

  return res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  return res.json(product);
});

app.get("/popular", async (_, res) => {
  const result = await prisma.product.findMany({
    orderBy: {
      view: "desc",
    },
    take: 10,
  });

  res.json(result);
});

app.get("/search", async (req, res) => {
  if (!req.query.name) {
    return res.json({});
  }

  const result = await prisma.product.findMany({
    where: {
      name: {
        contains: req.query.name.toString(),
      },
    },
    take: 10,
    orderBy: {
      view: "desc",
    },
  });

  res.json(result);
});

app.get("/categories", async (_, res) => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
});

app.use(errorHandler);

export { app };
