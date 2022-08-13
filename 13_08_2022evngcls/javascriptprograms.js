// ##############################################
// swap a two numbers
// 1.
// let a = 10;
// let b = 5;
// let temp = a;

//  actual ha a=b nu kudka sola a oda value kanama poidum but b still atha than erukum until vera onu
// b ku assign panura varikum so athanala than temp la a ha assign panurom
// a = b;
// b = temp;
// console.log(a, b);

// ####################################################
// 2.
// fibonacci series
// 0 1 1 2 3 5 8 13 21 34 ...

// let nums = 10;
// let n1 = 0;
// let n2 = 1;

// console.log(n1);
// console.log(n2);

//  already mela 2numbers kuduthurukan so athan i ha 2la erunthu start panen

// for (let i = 2; i < nums; i++) {
//   let result = n1 + n2;
//   n1 = n2;
//   n2 = result;
//   console.log(result);
// }
// ###############################
// 3.
// prime nos
// let num = 20; // 2, 3, 5, 7, 11, 13, 17, 19
// 0 divide by anything infinity ,1 alayumyum divide pana kuduthau 2 la erunthuthan start agum divisor lam
// function isPrimeOrNot(testNum) {
//   let isPrime = true;
//   for (let i = 2; i < testNum; i++) {
//     if (testNum % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   return isPrime;
// }

// for (let i = 2; i <= num; i++) {
//   if (isPrimeOrNot(i)) {
//     console.log(i);
//   }
// }
// #################################
// 4.
// find num of digits
// 0-9 -> 1, 23 -> 2, 2345 -> 4

// let num = 234;
// let count = 0;
// let digit = 0;
// while (num > 0) {
//   digit = num % 10;
//   // normal ha javascript la divide pana decimal than varum round number akurathuku math.floor use panurom
//   // divide pani 3.75 vanthalum 3 than eduthukum
//   num = Math.floor(num / 10);
//   234; // vanthu eppidi panurathunala 23 ha maridum note athae num thanstore panurom
//   count += 1;
// }

// console.log(count);
// #######################################
// 5.
// sum of digits
// let num = 1243;
// let sum = 0;
// while (num > 0) {
//   digit = num % 10;
//   num = Math.floor(num / 10);
//   sum += digit;
// }

// console.log(sum);
// #################################################
// 6.
// armstrong number
// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// let num = 153;
// let originalNumber = num;//note num ha vera oru variable la store panirukan ena na num ha divide pana sola
// value kami agita varu adhuku than
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum += digit ** 3;
//   num = Math.floor(num / 10);
// }

// if (originalNumber === sum) {
//   console.log("Armstrong number");
// } else {
//   console.log("not an armstrong number");
// }
// ########################################
// 7.
// perfect numbers

// 6=1,2,3= 1+2+3=6
// 6 oda divisors lam add panna antha number varanum except 6
// 28 is also a perfect number

// let num = 28;

// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// if (num === sum) {
//   console.log("perfect number");
// } else {
//   console.log("Not a perfect number");
// }
// ################################################
