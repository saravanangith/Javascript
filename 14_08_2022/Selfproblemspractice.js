// add two numbers
// 1.
// let a = 20;
// let b = 30;

// console.log(a + b);
//

// ########################################
// 2. Maximum of two numbers

// let a = 20;
// let b = 30;

// if (a >= b) {
//   console.log(`a  is greater`);
// } else {
//   console.log(`b is greater`);
// }

// ###############################################
// 3.Factorial of a number
// let a = 11;
// let fact = 1;
// for (let i = a; i > 0; i--) {
//   fact = fact * i;
// }
// console.log(fact);
// ###########################################
// 4.simple interest
// eppayum simple interest na yearly yearly constant ha than increase agum
// so mothala 100000 la 5% interest evlo na 500rs per year 500 na 5years ku 2500rs ethan output
// let principal = 10000;
// let rateofinterest = 5;
// let year = 5;

// let Per_year_interest = (rateofinterest / 100) * principal;

// // console.log(Per_year_interest);
// let after_five_year = year * Per_year_interest;

// console.log(after_five_year);
// ###############################################
// 5.Compund Interest\
// Basics about compound interest
// first year  1000rs principal na interest vanthu 10 so ammount = 1000 + 100 100 vanthu interest rate
// 1st year amount 1100
// eppa 2nd year ku 1100 than principal so edhoda 10 % interset 110 amount = 1210
// eppa 3rd year ku 1210 than principal so edhoda 10% interest 121 amount =1331

// let p = 1000;
// let roi = 10;
// let year = 3;
// let amount = 0;

// for (let i = 1; i <= 3; i++) {
//   let Per_year_interest = (roi / 100) * p;
//   amount = p + Per_year_interest;
//   console.log(`Amount ${amount}`);
//   p = amount;
// }
// ######################################################
// 6.Area of cirlce
// formula PIr*2

// const PI = 3.14;
// let r = 2;

// console.log(PI * r ** 2);

// #####################################################
// 7.check whether a number is Prime

function isPrime(input) {
  isprimee = true;
  for (let i = 2; i < input; i++) {
    if (input % i == 0) {
      isprimee = false;
      break;
    }
  }
  return isprimee;
}
let a = 79;
if (isPrime(a)) {
  console.log(`${a} prime number`);
} else {
  console.log(`${a} not a prime number`);
}
