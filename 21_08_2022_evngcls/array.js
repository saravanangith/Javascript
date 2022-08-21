// // Arrays -> [] -> contiguous memory allocation --> mutable
// let nums = [10, 20, 30, "vasanth", true, null, undefined];
// console.log(nums, typeof nums);
// console.log(nums[0], nums[1], nums[2]);
// // indexed, searching, sort -> advantages
// // add, delete -> disadvantage

// let nums = ["pavithra", "suresh", "vishal", "bharadan", 10, 20];
// console.log(nums[0], nums[1]);
// console.log(nums);
// nums[0] = "vasanth";
// console.log(nums, nums.length);

// entha for loop than efficiency la better
// for (let index = 0; index < nums.length; index++) {
//   console.log(index, nums[index]);
// }

// index lam vena data matum pothum na entha loop use panalam
// for of loop -> async operation panna solayum use panalam
// for (let val of nums) {
//   console.log(val);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7];
// // first and last
// console.log(nums[0], nums[nums.length - 1]);

// add
// let players = ["sachin", "virat", "dhoni"];
// last la add panum
// players.push("rohit");
// last value ha remove panum
// players.pop();
// first la value ha add panum
// players.unshift("rohit");
// first value ha remove panum
// players.shift();
// console.log(players);

// mutiple values ha push panikalam
// players.push("rohit", "jadeja", "raina");
// console.log(players);
// players.unshift("rohit", "jadeja", "raina");
// console.log(players);

// edu=hu vanthu total ha players la entha value erukunu output ha tharum //output 4
// let players = ["sachin", "virat", "dhoni"];
// console.log(players.unshift("rohit"));
// console.log(players.push("rohit"));//output 4 back la add agum becoz push
//remove pana value ha output ha tharum //output//"dhoni" pakathula players poturukurathunala sachin virat varum
// console.log(players.pop(), players);

//console.log(players.shift(), players); // output-sachin

// methods

// concat
// erandu array va oray array va join panidum
// let playersA = ["sachin", "virat", "dhoni"];
// let playersB = ["samson", "rahul", "kishan"];
// let team = playersA.concat(playersB);
// console.log(team, playersA, playersB);

// fill
//fill("0", 1),//0 than value first index position la erunthu 0 va fill panitu va nu solurathu
//let players = ["sachin", "dhoni", "virat", "rohit"];
//console.log(players.fill("0", 1), players); //output-[ 'sachin', '0', '0', '0' ] [ 'sachin', '0', '0', '0' ]
//range tharen 1 to 3 kula-last value 3 ha viturum
//console.log(players.fill("0", 1, 3), players); //[ 'sachin', '0', '0', 'rohit' ] [ 'sachin', '0', '0', 'rohit' ]

// includes -> case sensitive
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.includes("sachin"));
// console.log(players.includes("Sachin"));
// console.log(players.includes("sachin", 1));

// indexOf
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.indexOf("dhoni"));//search pani index value ha tharum
//console.log(players.indexOf("dhoni", 3));// 3rd position la erunthu search panum dhoni ilaya so -1 tharum
//console.log(players.indexOf("raina")); //raina illa so -1 than output

// join
// let players = ["sachin", "dhoni", "virat", "rohit"];
// try this
// console.log(players.join(""));
// console.log(players.join(" "));

//console.log(players.join("---")); // orae string ha mathirum

// last indexOf
// let players = ["sachin", "dhoni", "virat", "rohit", "sachin"];
// console.log(players.lastIndexOf("sachin")); //mothala last erukura value ha search panum appidi ilana last la erunthu back pogum
// yenga eruko antha position ha print panum illana -1 ha print panum

// reverse
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja"];
// console.log(players.reverse()); //reverse panidum ela datavum

// custom reverse
//reverse function use panama reverse panurathu
// let result = [];
// let length = players.length;
// actula ha entha for loop use pana 3 values than print agum ena
// pop method oru oru value ha players la erunthu remove panum i value increase aga sola players.length
// decrease agum so athanala than atha oru variable la store panurom
// (i = 0), (players.length = 6);
// (i = 1), (players.length = 5);
// (i = 2), (players.length = 4);
// (i = 3), (players.length = 3);
// output -[ 'jadeja', 'raina', 'rohit' ]
// for (let i = 0; i < players.length; i++) {
// for (let i = 0; i < length; i++) {
//   let lastValue = players.pop();
//   result.push(lastValue);
// }

// console.log(result);

// sort
// let players = [
//   "sachin",
//   "dhoni",
//   "virat",
//   "rohit",
//   "raina",
//   "jadeja",
//   "Suresh",
// ];
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja"];

//entha case ku ok
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja"];
// console.log(players.sort());
//entha case ku captial letter than eduthuku ena ascii value edhuku kami etha over come panurathuku than
// edhu aduthu erukuratha edukurom
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja", "Zero"];
// console.log(players.sort());
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja", "Zero"];
// console.log(players.sort((a, b) => a.localeCompare(b)));//ascending order
//console.log(players.sort((a, b) => b.localeCompare(a))); //decending order

// let nums = [2, 4, 1, 5, 7, 9, 19, 28, 32, 23];
// console.log(nums.sort()); //output [
//    1, 19, 2, 23, 28,
//   32,  4, 5,  7,  9
// ] mothala frst numbers ha eduthu sort panuthu etha overcome panathan kela erukura method eruku
// console.log(nums.sort((a, b) => a - b)); // asc
// console.log(nums.sort((a, b) => b - a)); // des

// slice -same as string la use panathu
// let nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(1));
// console.log(nums.slice(1, 3));
// console.log(nums.slice(-4, -1));
