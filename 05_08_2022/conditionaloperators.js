// conditional statements
// if, if - else, else if ladder, switch

// let age = 12;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible to vote");
// }

// let num1 = 15;
// let num2 = 10;
// // greatest of 2 nums
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greater");
// }

// logical operators
// && -> logical and
// || -> logical or
// ! -> logical not

// let age = 13;
// let isVoterIDAvailable = true;
// if (age >= 18 && isVoterIDAvailable) {
//   console.log("Eligible to vote");clear
// } else {
//   console.log("Not Eligible to vote");
// }

// let isAadharAvailable = false;
// let isVoterIDAvailable = false;
// if (isAadharAvailable || isVoterIDAvailable) {
//   console.log("Eligible to get passport");
// } else {
//   console.log("Not Eligible to get passport");
// }

// let num1 = 15;
// let num2 = 10;
// let num3 = 20;
// greatest of 3 nums
// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("num1 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// } else {
//   if (num2 > num3) {
//     console.log("num2 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// }

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greater");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is greater");
// } else {
//   console.log("num3 is greater");
// }

// practice
// if (10) {
//   console.log("vasanth");
// }

// -10 nalum adhu truthyvalues than
// if (-10) {
//   console.log("vasanth");
// }

// if (0) {
//   console.log("vasanth");
// }

// string kula ethachu kudutha adhu truthuvalues than
// if ("vasanth") {
//   console.log("vasanth");
// }

// if ("") {
//   console.log("vasanth");
// }

// if (undefined) {
//   console.log("vasanth");
// }

// if (null) {
//   console.log("vasanth");
// }

// if (NaN) {
//   console.log("vasanth");
// }

// #############################################
// falsy values
// 0, false, '', undefined, null, NaN
// #############################################

// console.log(1 > 2 > 3); // false =>(1>2 na false so 0 assign agum )=> (0>3) =>output false
// console.log(3 > 2 > 1); // false =>(3>2 na true varum true valu 1 ha so 1 assign agum)=>(1>1) = output false

// console.log(console.log("vasanth")); // vasanth print agi antha log function undefined return panum so adhuvum print agum
//
// note if statement la console function work agum
// short circuiting
// let age = 17;
// if (age > 18 && console.log("vasanth")) { //motha value ha false so edhu next value check pananthu not eligible than print agum
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// let age = 20;
// if (age > 18 && console.log("vasanth")) {
//   //first value true so next ku pogum  vasanth print agum  aprm adhu undefined agum so output vasanth , not eligible nu print agum
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// let age = 20;
// if (age > 18 || console.log("vasanth")) { //frst statemet ha true so second pogathu staright ha print panidum
// output eligible actula ha or ku frst false ana than second one pogum
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// if (console.log("vasanth")) { // vasanth print agitu undefined anathu nala kela erukuratha print panathu
//   console.log("dabjkanfkaba");
// }

// logical Not !
// true -> false
// false -> true
// 10>5 =true not operator pota false ha mathivirum so else part poidum
// if (!(10 < 5)) {
//   console.log(10);
// } else {
//   console.log("5");
// }

// practice
// console.log(!10, !"dadada"); // false actula 10 true value !10 kudutha false ha mathidum
// console.log(!null, !0, !""); // true
