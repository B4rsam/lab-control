import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
