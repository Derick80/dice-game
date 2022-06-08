export const pickDiceSides = () => {}

export const oneDieRoll = (sides: number) => {
  let min = Math.ceil(1)
  let max = Math.floor(sides)
  const result = Math.floor(Math.random() * (max - min) + min)
  return result
}

export const multiDieRoll = (times: number, sides: number) => {
  let results = []

  do {
    results.push(oneDieRoll(sides))
  } while (results.length < times)
  return results
}
