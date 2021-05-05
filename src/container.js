const container = {}

export const bind = (key, value) => {
  container[key] = value
}

export const resolve = (key) => {
  return container[key]
}
