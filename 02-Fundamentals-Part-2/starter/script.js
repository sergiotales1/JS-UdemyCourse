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
/* 

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
*/
/* */

// challenge 2

// function calcTip(bill){
//    let billValue = bill
//    let tip = (bill)=>{
//       if(bill >= 50 && bill <= 300){
//          return bill * 0.15
//       } else {
//          return bill * 0.20
//       }
//    }
//    let tipStore = tip(billValue)
//    return tipStore
// }

/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20


let bills = [125, 555, 44]
let tips = []
let totals = []
for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}


console.log(totals)

*/
/*
let mark = {
   fullName : 'mark',
   mass : 78,
   height : 1.69,

   calcBMI(){
      this.BMI = this.mass / (this.height ** 2)
      console.log(this.BMI)
      return this.BMI
   }
}


let john = {
   fullName : 'jhon',
   mass : 92,
   height : 1.95,

   calcBMI(){
      this.BMI = this.mass / (this.height ** 2)
      console.log(this.BMI)
      return this.BMI
   }
}
console.log(options())

function options(){
   let result = ((mark.calcBMI()) > (john.calcBMI())) ? `Mark's BMI (${mark.BMI}) is bigger than John's BMI (${john.BMI})` : `John's BMI (${john.BMI}) is bigger than Mark's BMI (${mark.BMI})`
   return result
}
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for(let i = 0; i < bills.length ; i++){
   
   function calcTip(bills) {
      let result = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20
      return result
   }
   tips.push(calcTip(bills[i]))
   totals.push(tips[i] + bills[i])
}
console.log(bills, tips, totals)
console.log(calcAverage(totals))

function calcAverage(arr){
   let sum = 0
   for(let i = 0; i < arr.length; i++){
      sum += arr[i]
   }
   let average = sum / arr.length
   return average
}