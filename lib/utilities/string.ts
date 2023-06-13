import { isNumber } from './variable-type'

export const padStart = (
  val: string | number,
  length: number,
  filler = '0'
) => {
  const availableVal = isNumber(val) ? val.toString() : val
  return availableVal.padStart(length, filler)
}
