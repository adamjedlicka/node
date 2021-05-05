import { bind } from './src/container.js'
import { server } from './src/server.js'
import { placeOrderSideEffect } from './src/sideEffects.js'

bind('placeOrderSideEffect', placeOrderSideEffect)

const PORT = 8080

server.listen(PORT, () => `Server listening on ${PORT}`)
