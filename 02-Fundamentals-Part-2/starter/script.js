'use strict'
/*
const passTest = true
let driversLicense = false
if(passTest) driverLicense = true
if(driversLicense) console.log('blablablá')

*/

/*

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear
console.log(calcAge3(2001))

const yearsUntilRetirement = birthYear => {
   const age = 2037 - birthYear
   const retirement = 65 - age
   return retirement
}

console.log(yearsUntilRetirement(1991))
 */

/*

function cutFruits(fruit, pieces){
   return fruit * pieces
}

function fruitProcessor(apples, oranges, pieces){
  const applesPieces = cutFruits(apples, pieces)
  const orangesPieces = cutFruits(oranges, pieces)
  return `We made a juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of orange`
}

console.log(fruitProcessor(1, 2, 4))

 */ 
/* */

const average = (s1, s2, s3)=>{
   let ave = 0
   ave = (s1 + s2 + s3) / 3
   return ave
}

function checkWinner(d1, d2, d3, k1, k2, k3){
   let scoreDolphins = average(d1, d2, d3)
   let scoreKoalas = average(k1, k2, k3)
   
   if(scoreDolphins > (scoreKoalas*2)){
      return `Dolphins won! (${scoreDolphins} vs ${scoreKoalas})`
   } else if (scoreKoalas > (scoreDolphins*2)){
      return `Koalas won! (${scoreKoalas} vs ${scoreDolphins})`
   } else{
      return 'No team wins...'
   }
}

function checkData(data){
   let result
   if(data == 1){
      result = checkWinner(44, 23, 71, 65, 54, 49)
   } else {
      result = checkWinner(85, 54, 41, 23, 34, 27)
   }
   return result
}

console.log(checkData(2))
/* */