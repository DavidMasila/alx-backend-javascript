export default function hasValuesFromArray(set, array) {
  for (const values of array) {
    if (set.has(values)) return true;
  }
  return false;
}
