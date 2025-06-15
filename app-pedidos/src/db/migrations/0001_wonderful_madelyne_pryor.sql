CREATE TABLE "clientes" (
	"id" text PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"endereco" text NOT NULL,
	"bairro" text NOT NULL,
	"estado" text NOT NULL,
	"cep" text NOT NULL,
	"pais" text NOT NULL,
	"data_de_nascimento" date,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "clientes_nome_unique" UNIQUE("nome")
);
--> statement-breakpoint
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_cliente_id_clientes_id_fk" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes"("id") ON DELETE no action ON UPDATE no action;