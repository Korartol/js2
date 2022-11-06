// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity; 
  let sum = 0;
  let avg = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    };
    sum += arr[i];
  };

  avg = +(sum / arr.length).toFixed(2);  // округлям до двух знаков после запятной и преобразуем к number (+)

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  // Ваш код
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum1 = func(arrOfArr[i]);
    if (sum1 > max) {
      max = sum1;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
    let max = -Infinity;
    let min = Infinity;
    let different;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      };
      if (arr[i] < min) {
        min = arr[i];
      };
    };
    different = Math.abs(max - min);

    return different;

}
