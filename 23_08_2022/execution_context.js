//
// #######################################################################

// 1.memory creation phase
// 2.code execution phase
// 1.mothala oru box kula call stack and code execution erukum

// callstack - variable eruka nu pathu default value ana undefined ha assign panikum variable ku
// log statement lam execute panauthu adhu code execution phase than execute panum
//  variable declare illa initialiaze pana than call stack la poi antha variable=undefined nu value
// assign agum naba enatha value fname ku kuduthalum undefined nu than assign agum
// code execution la matum than undefined nura value ha original value replace panum

//3. call stack phase
// eg. console.log(fname); enga control varum mothala etha leave panidum
//   var fname = "vasanth";-enga varum varaible ku value assign panirukon analum undefined nu assign panikum

// console.log(fname);-ethayum leave panidum

// call stack phase screenshot attach panirukan
//
// 4.code execution phase
// eppa code execution phase enga than vanthu

// console.log(fname); -edhuku value undefined so adhu print agum
// var fname = "vasanth"; -enga value replace agi vasanth nu fname la store agum
// console.log(fname);-edhula vasantthunu print
// code execution phase screen shots um attach panirukan
// console.log(fname);

// var fname = "vasanth";

// console.log(fname);
// ###########################################################

// #####################################################################
// function nu nura screenshot attach panirukan elathayum pathutu kadasiya paru screenshot ha
// mothala call stack la add poi store agidum kudava antha function um store agidum
// aprm code execution phase la full ha print agidum athan kela eluthitu mela add function call panna
// call aguthu
//  function ha oru sub nu oru variable ha store panuren so call stack la mothala sub variable  vanthu un defined
// athan sub function ha mothala call pana sola error adikum undefiend nu adikathu type error nu adikum
// en na function ha thuki variable ha store panitu munadi call panna eppidi than error adikum
// ##############################
// add();
// sub();
// function add() {
//   console.log("adding...");
// }

// var sub = function () {
//   console.log("subtracting...");
// };

// etha use pana sola mela erukura subfunction ha comment panidu
// sub(); // intial ha sub ku undefined nu varum aprm function store agum sub la aprm 5line no54 la call
// panurathunala work agum

// // ###########################
// 4.let use pani screen shot attach panirukan-screenshot no 4
// 1;
// screenshot no-6

// call stack + codeexecution - execution context nu soluvanga
// frst frst code run aguratha global execution context nu soluvanga anonymus function uma soluvanga

// console.log(fname);//output undefined nu varum ena call stack la edhuvum erukathu variable declare kuda
// // pana variable declare paniruntha vachu call stack la mothala poi store agirukum

// 2.
// let kuduthrukathunala fname call stack la store agama script nu oru thaniya oru block ha store
// agum fname=undefined nu call stack erunthu script poi access pana mudiyathu fname la value eruntha matum
// than script poi access panna
// // frst line laya error adichurum next line pogathu

// console.log(fname); //output ReferenceError: Cannot access 'fname' before initialization
// let fname = "saravan";
// console.log(fname);

// ######################################################
// screenshot add panirukan no-7
// add function ku thaniya ula create agi aprm add operation mudinjathu aprm clear agidum
// let fname = "vasanth";

// function add() {
//   console.log("logging....");
//   let sub = function () {
//     console.log("sub....");
//   };

//   sub();
// }
// console.log(fname);
// console.log(add());
// ###################################################
// screenshot no - 8

// add ku oru CS and CE create agum
// sub ku oru CS and CE create agum
// refer screenshot

// function add() {
//   console.log("logging....");
//   let sub = function () {
//     console.log("sub....");
//   };

//   sub();
// }
// console.log(fname);
// console.log(add());
