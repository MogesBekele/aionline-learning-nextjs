import { integer, boolean, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  subscriptionId: varchar(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar().notNull(),
  description: varchar(),
  name: varchar(),
  noOfChapters: integer(),
  includeVideo: boolean(),
  level: varchar(),
  category: varchar(),
  userEmail: varchar("userEmail").references(() => usersTable.email),
});
