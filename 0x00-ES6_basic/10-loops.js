export default function appendToEachArrayValue(array, appendString) {
    for (let x of array) {
      let value = array[x];
      array[x] = appendString + value;
    }
  
    return array;
  }
  