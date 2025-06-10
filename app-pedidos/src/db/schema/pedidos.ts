import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const statusdopedido = pgEnum(pedido_status, [
  "pendente",
  "pago",
  "cancelado",
]);

export const pedidos = pgTable("pedidos", {
  id: text().primaryKey(),
  clienteId: text().notNull(),
  totaldopedido: integer().notNull(),
  status: statusdopedido().notNull().default("pendente"),
  createdAt: timestamp().defaultNow().notNull(),
});
