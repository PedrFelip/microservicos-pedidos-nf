import amqp from 'amqplib'

if (!process.env.BROKER_URL) {
  throw new Error('BROKER_URL não está definido')
}

export const broker = await amqp.connect(process.env.BROKER_URL)