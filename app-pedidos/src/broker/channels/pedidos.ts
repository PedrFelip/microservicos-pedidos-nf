import { broker } from "../broker.ts";

export const pedidosChannel = await broker.createChannel();

await pedidosChannel.assertQueue('pedidos')
