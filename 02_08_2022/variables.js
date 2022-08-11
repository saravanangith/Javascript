// variables-It is used to store some data
// fname="kk";
// ram la memory create agi adhuku oru number kudukum athan address aprm antha address ku oru name tharum antha name than fname
// edhu elathayum dns onu store panum os than entha process full ha seiyum

// javascript la oru character um string than neraya character senthathum string than
var fname = "sara";
// javascript negative number type number than decimal number type hu number than
var age = 23;
var decimal = 100.1;
// null nurathu oru object athavathu memory create agidum ram la for example sila peruku lastname erukathu antha
// mathiri nerathula naba empty data set pannanum adhuku entha null use panikalam
var lastname = null;
// eppidi kudutha javascript memory la box create panitu adhukula undefined potu vachukum aprm value kudutha undefined ha thokitu naba kudutha value ha potukum
// edhoda type um undefined than
var nothing;
// normal ana boolean mathiri than edhuvum camelcasing example=yourFirstName
var isEligible = false;

// note:javascritp la elame object than

console.log(fname, typeof fname);
console.log(age, typeof age);
console.log(decimal, typeof decimal);
console.log(lastname, typeof lastname);
console.log(nothing, typeof nothing);
// -------------------------------------------

// datatypes

// 1.primitive or value datatype
// primitive means inbuilt data type provided by javascript string,number,boolen,null,undefined
// 2.refrenced data type -customs ha data type cretae panalm object,array,function

// memory erundu box create agi eranduthukum vera vera address create agi same name la os confuse agi kadasiya erukuratha edhuthukum
// athavathu same name la variable create pana allow panum var
var first; //edhu peru declaration

var first = "hi"; //initialisation or definiton
var first = "hello";

console.log(first);

let second1 = "bye";
// let second1 ="bye" eppidi pota error adikum ena na same name but unala re-assign pana mudiyum
// appidna antha variable ku value mathalam

second1 = "sosad";
// athavathu meomory la box create agi data potuvachukum re-assign pana antha box laya erukura data
// va eduthutu etha potukum
// note enga vanthu erandu vati same name use panala oru name ku vera vera value assign panuran avlothan

console.log(second1);

const pi = 3.14; //can be initialized but cannot reassign
// pi = 44;  terminala error adikum
// console.log(pi);
