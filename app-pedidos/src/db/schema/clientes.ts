import { date } from "drizzle-orm/mysql-core";
import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const clientes = pgTable('clientes', {
  id: text().primaryKey(),
  nome: text().notNull().unique(),
  email: text().notNull(),
  endereco: text().notNull(),
  bairro: text().notNull(),
  estado: text().notNull(),
  cep: text().notNull(),
  pais: text().notNull(),
  dataDeNascimento: date({ mode: 'date' }),
  createdAt: timestamp().defaultNow().notNull(),
});
