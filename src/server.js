import express from 'express'
import { helloWorldController, placeOrderController } from './controllers.js'

const controller = (fn) => {
  return async (req, res) => {
    const response = await fn()

    res.status(response.status).send(response.data)
  }
}

export const server = express()

server.get('/', controller(helloWorldController))

server.post('/place-order', controller(placeOrderController))
