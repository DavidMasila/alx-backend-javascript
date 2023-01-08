export default function hasValuesFromArray(set, array) {
  if ([...set] === array) {
    return true;
  }
  return false;
}
