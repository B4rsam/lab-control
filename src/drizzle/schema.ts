import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    id: uuid("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
