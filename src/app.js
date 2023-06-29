import express from "express";
import morgan from "morgan";
import { routes } from "./routes/index.routes.js";
import { pool } from "./db/db.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Teacher App Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a test API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/routes/route/teacher.routes.js"],
};


app.use("/ping", async (req, res) => {
  const result = await pool.query("SELECT 1 + 1 AS result")
  res.json(result[0][0]);
});

routes(app);

const specs = swaggerJsdoc(options);

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

export default app;