import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Password123",
  database: "teachersdb",
  port: 3306
});