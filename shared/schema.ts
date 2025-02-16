import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We don't need database tables for this app
// but we'll keep the schema file for type consistency
export type Command = {
  name: string;
  description: string;
  handler: () => void;
};
