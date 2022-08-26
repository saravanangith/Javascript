// #############################################
//1. First log statement lam execute agum function kula erukura log statement kedaiyathu velila
// erukura log statement execute agum
// 2.check function ha munadiya call panirukurathu nala mothala adhu execute agum aprm
//3. set time out lam webapi pogum mothala yedhu kammiyana time ho adhu mothala vanthu nikum aprm adhu
//execute agum
//
// console.log("start"); // start, undefined, first, end, checking,123, second, third
// console.log(age);
// check();
// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;
// setTimeout(() => {
//   console.log("third");
// }, 2000);

// function check() {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// }

// console.log("end");
// #######################################################################
// ##########################################
// edhula pathen na mela solirukura mathiri than 1stpoint but check function ha thoki kela poturupan so
// setimeout vanthu web api pogum zero second nu nala thirumbi vanthurum print agidum enuoru settimeout
// 2s kalichu than varum adhukula kela erukura function call agi adhu print agidum aprm kadasiya antha
// settimeout print agum

// console.log("start"); // start, undefined, first, end, 123, second, checking,third
// console.log(age);

// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;
// setTimeout(() => {
//   console.log("third");
// }, 2000);

// function check() {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// }
// check();
// console.log("end");
// ###########################################

// ###################
// edhula check function ha oru variable ku assign panitu  frst call panirupan
// call stack la mothala varaiable lam undefined value assign panum but check vanthu let la kuduthurukan
// // so adhu script la erukum access panamudiyathu athan error adichu stop agidum.

// console.log("start"); // start, undefined, Cannot access 'check' before initialization
// console.log(age);
// check();
// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;
// setTimeout(() => {
//   console.log("third");
// }, 2000);

// let check = function () {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// };

// console.log("end");

// ################
// #######################
// edhula var la check function assign panirukan so  athan type error matha padi mela erukura mathiri than
// Execute agum Note variable la function ha asssign panna error adikuthu adhuku kela ena than
// log statement erunthalum execute agathu edhula check function ha frst call panirupan
// but kela lam log function eruku adhelam edhuku munadiya execute agum nu mela pathurupom
// // but edhula function ha variable la assign panirukan so athan frst ha error adichirukum

// console.log("start"); // start, undefined,TypeError: check is not a function
// console.log(age);
// check();
// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;
// setTimeout(() => {
//   console.log("third");
// }, 2000);

// var check = function () {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// };

// console.log("end");
// ##############################
// ###########################
// check function ha kela call panirupan and antha function kule settimeout poturupan adhuvum web api
// poitu varum but first oru settimeout pouturukan athan execute agum mothala function kula erukura
// settimeout zero than line no 127 erukura setimeout um zero than but order of execution edhu frst ho athan
// print agum.
// console.log("start"); // start, undefined, first, end, 123, second,checking, third
// console.log(age);

// setTimeout(() => {
//   console.log("123");
//   console.log("second");
// }, 0);

// console.log("first");

// var age = 30;
// setTimeout(() => {
//   console.log("third");
// }, 2000);

// var check = function () {
//   setTimeout(() => {
//     console.log("checking");
//   }, 0);
// };
// check();
// console.log("end");

// ################################
// callback
// single threaded synchronuous
// steps ->Eppidi than hotel pona steps follow panuvom
// Enter the hotel
// go the seat
// order food
// prepare food
// serve food
// eat food
// pay the bill
// walk away

// ##################################
// eppidi pota actual ha mela erukura order mathiri execute agathu log statement lam frst execute agidum
//output
// Enter the hotel and find a seat
// ordering the food
// serving the food
// pay bill and walk away
// preparing food
// eating the food

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   // food prepare panurathuku time edukum konjam so athan settimeout la poten
//   setTimeout(() => {
//     console.log("preparing food");
//   }, 2000);
//   console.log("serving the food");
//   // Food sapudurathuku konjam time edukum edhuvum athanala thant settimeout la poturukuna
//   setTimeout(() => {
//     console.log("eating the food");
//   }, 3000);
//   console.log("pay bill and walk away");
// }

// hotel();

// ######################################
// ###########################################################

// mela erukura issue ha over come panurathuku than function kula poturom

// function prepareFood() {
//   setTimeout(() => {
//     console.log("preparing food");
//     console.log("serving the food");
//     eatFood();
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay bill and walk away");
//   }, 3000);
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
// }

// hotel();
// ##############################################################################
// seperation of concern -enoda function enoru function ha depend pani eruka kudathu atha edhuku meaning
// or loosely coupled
// dependency injection- na ena function ha kudukurano atha matum call panna pothum normal ha
// programa automatic ha function ha call panum appidi pana kudathu

// first class citizen- appidina function ha variable pass pana mudiyum and function ha return pana mudiyum
// oru oru function um oru oru vati thani thaniya call panirupan
// function areaOfCircle(radius) {
//   return 3.14 * radius * radius;
// }

// function areaOfsquare(side1, side2) {
//   return side1 * side2;
// }

// function areaOfRectangle(length, breadth) {
//   return length * breadth;
// }

// let radius = 5;
// let side = 4;
// let len = 3;
// let breadth = 5;

// console.log(areaOfCircle(radius));
// console.log(areaOfsquare(side, side));
// console.log(areaOfRectangle(len, breadth));
// output
// 78.5;
// 16;
// 15;
// ###############################################################

// doubt -call backfunction edhuku use panurom na direct ha oru function badhila verum function name matum call
// panurathuku use panurom
// eg inital ha unoda code eppidi eruku vachuka
// function square(side1) {
//   return side1;
// }
// let side1 = 4;
// console.log(square(side1));

// future la unoda code ha eppidi  mathitanga nu vachuka  ne call pana sola oru parameter than send panura
// but unoda code la line number 260 la 2 parameter yaro enoru developer mathintanga
//  ena agum na nee yenga yenga lam entha function ha call panrikiyo angalam error adikum
// eg vera file entha function use panirka na anga error adikum
// edhula side1 number side2 undefined so undefined nu varum

// entha mathiri error ha avoid panurathukuthan call back function ha use panuranga
// function square(side1, side2) {
//   return side1 * side2;
// }
// let side1 = 4;
// console.log(square(side1));

// ##############################################
// call back function example
// code mathunalum  call pana sola name matum than call panurom // calculateArea(circle());
// eppidi call panurathunala vera file la use pnalum error adikathu
// code starting eppidi erukunu vachuka
// function rectangle(length, breadth) {
//   return length * breadth;
// }
// futurela eppidi mathianga but call panura edathula // calculateArea(rectangle());
// eppidi call panurathunala vera file la use pnalum error adikathu
// edhuva direct ha call paniruntha anga poi mathanum anga eppidi than erukum rectangle(lenght,breadth)

// atha eppidi mathanum  rectangle(lenght,breadth,something) eppidi mathanum
// // illana error adikanum
// function rectangle(length, breadth,something ) {
//   return length * breadth*something;
// }

// function circle(radius) {
//   return 3.14 * radius * radius;
// }

// function square(side1, side2) {
//   return side1 * side2;
// }

// function rectangle(length, breadth) {
//   return length * breadth;
// }

// let radius = 5;
// let side = 4;
// let len = 3;
// let breadth = 5;

// function calculateArea(fn) {
//   console.log(fn());
// }

// calculateArea(circle());
// calculateArea(square());
// calculateArea(rectangle());

// ##################################################################################
// prepare food and eatfood function um orae time la call agum set time out   velila la erukura console
// erurathu frst execute agum aprm than ula erukurathu execute agum
// output

// Enter the hotel and find a seat
// ordering the food
// serving the food
// pay bill and walk away
// preparing food
// eating the food

// function prepareFood() {
//   setTimeout(() => {
//     console.log("preparing food");
//   }, 2000);
//   console.log("serving the food");
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//   }, 3000);
//   console.log("pay bill and walk away");
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
//   eatFood();
// }

// hotel();
// #########################################################################
// actual ha epppidi potava work agum crt ha but but eat food oda time ha 1000 vachu call pana adhu execute
// agum ena preparefood and eatfood erandum orae time la call panurom
// erandu functionum orae time call panuren edhu time kamiya erukutho adhu frst call agidum

// function prepareFood() {
//   setTimeout(() => {
//     console.log("preparing food");
//     console.log("serving the food");
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay bill and walk away");
//   }, 3000);
//   //   }, 1000);//eppidi potu execute panna ethan frst execute agum
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
//   eatFood();
// }

// hotel();

// #########################################################################

// ethan crt ha na way eatfood ha thuki prepareFood ula kudkurathu but edhulayum
// oru disadvantage eruku oru function enoru function ha depend pani eruku eg eat food function ha thukitu
// eatfood ha call pana illa preparingfood nu function name mathitu  prepareFood nu call panna error adikum
// etha overcome panurathuku separation of concern or loosely coupled nu soluranga

// function prepareFood() {
//   setTimeout(() => {
//     console.log("preparing food");
//     console.log("serving the food");
//     eatFood();
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay bill and walk away");
//     //   }, 3000);
//   }, 1000); //enatha timing kamiya kuduthalum crt ha work agum
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
// }

// hotel();

// ###################################################################
// eppidi oru scenario eruku vachuka
// frontend la erunth username,password vanguren
// backend la validate panuren adhuku orginal name and password venum so database la erunthu frst
// fetch pannanum aprm than validate panna mudiyum frontend la erunthu eduthathu database la erukurathum
// same ha nu but database poitu value edthutu varathuku time agum adhukula enoda javascript code
// execute agidum

// synchronus ha  wait lam panathathu speed ha execute agum
// asynchronus na code wait pani execute agum database poi edhutu vara varaikum wait pannum eduthathu
// aprm compare pani excute agum

// settimeout la kuduthurukurathuthan databasecall panurathu but java script if loop la erukuratha execute panidum
// bcoz javascript synchronous

// function validate(username, password) {
//   let originalUserName, originalPassword;
//   setTimeout(() => {
//     // console.log("calling database");
//     originalUserName = "vasanth";
//     originalPassword = "123";
//   }, 2000); // },); timer edhvum kudukalana 0s eduthukum
//   console.log(originalUserName, originalPassword);
//   if (username === originalUserName && password === originalPassword) {
//   } else {
//     console.log("invalid data");
//   }
// }

// validate("vasanth", "123");
