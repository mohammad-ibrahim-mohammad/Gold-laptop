import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import app from "./app.js";
import pool from "./db/pool.js";

(async () => {
  try {
    await pool.connect({
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    });
    console.log("PostgreSQL connected successfully");

    app.listen(process.env.PORT, () =>
      console.log(`We are listing on port ${process.env.PORT}`),
    );
  } catch (err) {
    console.error("Failed to start server:", err.message);
    await pool.end();
  }
})();
