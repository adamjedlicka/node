import fetch from "node-fetch"

export const placeOrderSideEffect = async () => {
  const response = await fetch('https://eshop.adamjedlicka.cz/place-order', {
    method: 'POST',
  })

  const json = await response.json()

  return json
}
