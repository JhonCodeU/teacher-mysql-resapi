import express from "express";
import morgan from "morgan";
import { routes } from "./routes/index.routes.js";
import { pool } from "./db/db.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ping", async (req, res) => {
  const result = await pool.query("SELECT 1 + 1 AS result")
  res.json(result[0][0]);
});

routes(app);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

export default app;