import { resolve } from './container.js'


export const placeOrderController = async () => {
  const placeOrderSideEffect = resolve('placeOrderSideEffect')

  for (let i = 0; i < 10; i++) {
    const json = await placeOrderSideEffect()

    if (json.ok !== 'A') continue

    return {
      status: 200,
      data: {
        order_number: json.order_number,
      },
    }
  }

  return {
    status: 500,
    data: null,
  }
}
