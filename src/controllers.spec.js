import assert from 'assert'
import { bind } from './container.js'
import { placeOrderController } from './controllers.js'

describe('controllers', () => {
  describe('placeOrderController', () => {
    it('returns order number', async () => {
      const placeOrderSideEffect = () => {
        return {
          ok: 'A',
          order_number: 'a',
        }
      }

      bind('placeOrderSideEffect', placeOrderSideEffect)

      const response = await placeOrderController()

      assert.strictEqual(response.status, 200)
      assert.strictEqual(response.data.order_number, 'a')
    })
  })
})
