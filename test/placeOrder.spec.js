import assert from 'assert'
import supertest from 'supertest'
import { bind } from '../src/container.js'
import { server } from '../src/server.js'

describe('/place-order', () => {
  it('returns order number', async () => {
    const placeOrderSideEffect = async () => {
      return {
        ok: 'A',
        order_number: '12345',
      }
    }

    bind('placeOrderSideEffect', placeOrderSideEffect)

    const { body } = await supertest(server).post('/place-order')

    assert.strictEqual(body.order_number, '12345')
  })

  it('returns status 500 when all requests fails', async () => {
    const placeOrderSideEffect = async () => {
      return {
        ok: 'N',
      }
    }

    bind('placeOrderSideEffect', placeOrderSideEffect)

    const { status } = await supertest(server).post('/place-order')

    assert.strictEqual(status, 500)
  })

  it('returns status 500 when all requests fails', async () => {
    const responses = [
      {
        ok: 'N',
      },
      {
        ok: 'N',
      },
      {
        ok: 'A',
        order_number: '12345',
      },
    ]

    const placeOrderSideEffect = async () => {
      return responses.shift()
    }

    bind('placeOrderSideEffect', placeOrderSideEffect)

    const { body } = await supertest(server).post('/place-order').expect(200)

    assert.strictEqual(body.order_number, '12345')
  })
})
