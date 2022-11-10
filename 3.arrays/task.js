function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(arr0 => arr0 > 0).filter(arr0 => arr0 % 3 === 0).map(arr0 => arr0 * 10);

  return resultArr; // array
}
