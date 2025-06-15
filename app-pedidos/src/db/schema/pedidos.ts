import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { clientes } from "./clientes.ts";

export const statusdopedido = pgEnum("pedido_status", [
  "pendente",
  "pago",
  "cancelado",
]);

export const pedidos = pgTable("pedidos", {
  id: text().primaryKey(),
  clienteId: text().notNull().references(() => clientes.id),
  totaldopedido: integer().notNull(),
  status: statusdopedido().notNull().default("pendente"),
  createdAt: timestamp().defaultNow().notNull(),
});
