import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/", async (_, res) => res.json("Hello world"));

app.listen(8000, () => console.log("App started on port 8000"));
