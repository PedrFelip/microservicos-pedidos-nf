CREATE TYPE "public"."pedido_status" AS ENUM('pendente', 'pago', 'cancelado');--> statement-breakpoint
CREATE TABLE "pedidos" (
	"id" text PRIMARY KEY NOT NULL,
	"cliente_id" text NOT NULL,
	"totaldopedido" integer NOT NULL,
	"status" "pedido_status" DEFAULT 'pendente' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
