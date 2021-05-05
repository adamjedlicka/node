import express from 'express'
import { placeOrderController } from './controllers.js'

const controller = (fn) => {
  return async (req, res) => {
    const response = await fn()

    res.status(response.status).send(response.data)
  }
}

export const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {
    user: {
      name: 'Pepa',
    },
    users: [
      {
        name: 'Franta',
      },
      {
        name: 'Lojza',
      },
      {
        name: 'Líza',
      },
    ],
  })
})

server.post('/place-order', controller(placeOrderController))
