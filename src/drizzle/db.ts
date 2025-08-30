import { Pool } from "pg";
import { drizzle } from "drizzle-orm/d1";

const pool = new Pool({
    user: "wontwork",
    password: "1234",
    database: "labcontrol",
    host: "localhost",
    port: 5432,
});

export const db = drizzle(pool);
