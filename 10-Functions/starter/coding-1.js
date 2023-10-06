const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  let userAnswer = window.prompt(`${this.question} ${printOptions()}`);
  for (let i = 0; i < this.answers.length; i++) {
    if (Number(userAnswer) === i) {
      this.answers[i]++;
    }
  }
  Number(userAnswer) === 0 ||
    Number(userAnswer) === 1 ||
    Number(userAnswer) === 2 ||
    Number(userAnswer) === 3 ||
    alert(`${userAnswer} is not a valid option, try again!`);

  this.displayResults(prompt('array or string?'));
};

poll.displayResults = function (type = 'array') {
  type =
    type === 'array'
      ? alert(this.answers)
      : alert(`Poll results are ${[...this.answers]}`);
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

function printOptions() {
  let str = ' ';
  for (let item of poll.options) {
    str += `\n${item}`;
  }
  return str + '\n(Write Option Number)';
}

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3, 2, 3, 4] });
