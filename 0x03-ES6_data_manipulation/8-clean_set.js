export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  // Use Array.from to convert the set to an array and filter the values
  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the filtered values with '-' and return the resulting string
  return filteredValues.join('-');
}
