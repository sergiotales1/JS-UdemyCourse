// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2037 - birthYear;

let test = () => {};
console.log();
*/
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  let temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude([3, 2, 1], [9, 0, 5]);
console.log(amplitude);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius: '),
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

/*
function printForecast(arr) {
  let days;
  let phrase = '... ';
  let temp;
  for (let i = 0; i < arr.length; i++) {
    days = i + 1;
    temp = arr[i];
    if (i == 0) phrase += `${temp}ºC in ${days} day ... `;
    if (i != 0) phrase += `${temp}ºC in ${days} days ... `;
  }
  return phrase;
}

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data2));
*/
