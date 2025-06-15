import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { z } from 'zod'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { pedidosChannel } from '../broker/channels/pedidos.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'ok'
})


app.post('/pedidos', {
    schema: {
        body: z.object({
            totaldopedido: z.coerce.number(),
        })
    }
}, (request, reply) => {
    const { totaldopedido } = request.body

    console.log('Pedido recebido:', totaldopedido)

    pedidosChannel.sendToQueue('pedidos', Buffer.from("Pedido recebido: " + totaldopedido))

    return reply.status(201).send()
})


app.listen({ host: '0.0.0.0', port: 3333}).then(() => {
    console.log('[Pedidos] Servidor iniciado na porta 3333')
})