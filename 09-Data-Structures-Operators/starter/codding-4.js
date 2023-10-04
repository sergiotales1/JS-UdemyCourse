document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textArea = document.querySelector('textarea');

// button.addEventListener('click', () => {
//   let storedData = textArea.value;
//   storedData = storedData.split('\n');

//   for (let item of storedData) {
//     item = item.trim().toLowerCase().split('_');
//     item[1] = item[1][0].toUpperCase() + item[1].slice(1);
//     item = item.join('');
//     console.log(item);
//   }
// });

button.addEventListener('click', () => {
  let storedData = textArea.value;
  let rows = storedData.split('\n');
  for (let [i, row] of rows.entries()) {
    let [first, second] = row.toLowerCase().trim().split('_');
    let output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(output.padEnd(20) + '✅'.repeat(i + 1));
  }
});

/*
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure
*/
