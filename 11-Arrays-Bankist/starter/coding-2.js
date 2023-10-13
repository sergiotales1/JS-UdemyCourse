const calcAverageHumanAge = dogs => {
  let humanAge = dogs
    .map(curr => (curr <= 2 ? 2 * curr : 16 + curr * 4))
    .filter(curr => curr >= 18)
    .reduce(
      (acc, curr, i, arr) => (i + 1 === arr.length ? (acc + curr) / arr.length : acc + curr),
      0
    );

  console.log(humanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge2 = dogs =>
  dogs
    .map(curr => (curr <= 2 ? 2 * curr : 16 + curr * 4))
    .filter(curr => curr >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
