// functions type

// function declaration
// edhu normal function
// function logger() {
//   console.log("logging");
// }
// oru variable la oru function ha store panuren
// function expression -> anonymous function
// let logger = function () {
//   console.log("logging....");
// };

// let logger = function vasanth() {
//   console.log("logging....");
// };
//vasanth(); //ReferenceError: vasanth is not defined
// edppidi call pana call agum
// logger();

// FIRST CLASS CITIZEN
// we can able to pass function as a parameter
// we can able to return function as a return type

// callback
// #######################################
// 2.
// function operations(num1, num2, callbackfn) {
//  3.
//   callbackfn(num1, num2);
// }
// 1.
// function call kula enam oru function ha eluthikuran
// 1.                     4. num1=10,num2=15
// // operations(10, 15, function (num1, num2) {
// //   console.log(num1 + num2);
// // });

//2.thaniya ha function eluthi call panuren
// function add(a, b) {
//   console.log(a + b);
// }

// operations(10, 15, add);
// ###########################################################
// munadi function ha call panuren work agum
// display();

// function display() {
//   console.log("logging...");
// }

// #########################################
// edhu error adikum output// ReferenceError: Cannot access 'displayExpression' before initialization
//next class la soluren nu solirukan
// displayExpression();
// let displayExpression = function () {
//   console.log("logging expression...");
// };

// note next class la soluren nu solirukan
// console.log(name); // undefined
// var name = "vasanth";
// console.log(name); // vasanth

// console.log(name); //output ReferenceError: Cannot access 'name' before initialization
// let name = "vasanth";
// console.log(name);

// console.log(age); // error -> cannot access age before initialization
// const age = 10;

// clock methods -> callback fns
// setTimeout function kula oru parameter la function eluthirupan enoru parameter la time kuduthurupan
// 2s kalichu oru vati print agitu stop agidum
// setTimeout(function () {
//   console.log("logging");
// }, 2000);

// every 1s print agita erukum
// setInterval(function () {
//   console.log(Date());
// }, 1000);
// #############################################
// thaniya function create pani call setTimeout function kula parameterla function ha pass panuren
// function logger() {
//   console.log("logging...");
// }

// setTimeout(logger, 1000);
// setInterval(logger, 1000);
// ###############################################
// it will work
// next class la soluren nu solirukan
// const num = [5, 10, 20];
// num[0] = "vasanth";
// console.log(num);
