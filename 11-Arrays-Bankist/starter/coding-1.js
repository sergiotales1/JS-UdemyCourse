const checkDogs = function (dogsJulia, dogsKate) {
  let juliaCopy = dogsJulia.slice();
  juliaCopy.splice(-2, 2);
  juliaCopy.splice(0, 1);
  const allDogs = [...juliaCopy, ...dogsKate];
  console.log(allDogs);
  allDogs.forEach(function (dog, i) {
    let isPuppy = dog >= 3 ? `is an adult, and is ${dog} years old` : `is still a puppy 🐶`;
    console.log(`Dog number ${i} ${isPuppy}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
