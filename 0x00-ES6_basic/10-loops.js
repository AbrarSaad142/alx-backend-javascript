export default function appendToEachArrayValue(array, appendString) {
    const resultarray = []
  for (const [idx, value] of array.entries()) {
    resultarray[idx] = appendString + value;
  }

  return array;
}
