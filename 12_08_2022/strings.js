// strings -> are immutable
// #############################################
// 1.
// let fname = "Saravanan";
// console.log(fname[0], fname[1], fname[8], fname[9]);
// console.log(typeof fname);

// fname[0] = "J";
// // Jaravanan
// console.log("output", fname);
// ##############################################
// 2.
// length-its property
// property na for eg class kula variables kudutha adhu property adhu mathiri functions ha class kula kudutha
// aduh methods
// fname = "saravanana               ";
// space um edhuthukum count la
// console.log(fname.length);
// ####################################################
// 3.
// methods
// charat vanthu namba index value kudutha character kudukum
// let news = "India won the T20 world cup";
// console.log(news.charAt(500));  // to get value at given index //500 position illa so empty space varum
// console.log(news[500]); //500 position illa so undefined varum

// let fname = "Sriram";
// console.log(fname.charCodeAt(0)); // to get ASCII values
// console.log(fname.concat(" ", "Guru", 10, "vasanth")); // join

// endswith starts with lam check panurathuku use panuvom
// let email = "test@infosys.com";
// console.log(email.endsWith("@infosys.com")); //return boolean value true
// let email = "test@tcs.com";
// console.log(email.endsWith("@infosys.com"));
// console.log(email.startsWith("test1"));

// let news = "India won the world India cup";
// case sensitive
// ("India", 5) 5th index la erunthu search panu india nu ethachu eruka nu pakum

// console.log(news.includes("India", 5)); // search string -> true/false, starting index = 5 //run this
// indexof- right ka pogum
// console.log(news.indexOf("India", 3)); // search string -> position, starting index = 0// run this
// indexOf("India", 22);- 22nd index la erunthu serach panum aprm india ila so -1 eduthukum
// ################################################################
// 4.
// let news = "India won the world India cup";
// lastIndexOf-left ka pogum
// last ha erukuratha kandupudikum so 20 than ans
// console.log(news.lastIndexOf("India"));
// let news = "India won the world India cup

// edhula "Indi i la erunthu start pani dnI eppidi pogum so zero  than ans kadasiya I ya pathutu compare panum
// India fulla ha erukanu illana -1 eruntha 0 thu position ha print panm
// console.log(news.lastIndexOf("India", 3));

// let news = "Indi won the world India cup";
// console.log(news.lastIndexOf("India", 3));
//edhuku output vanthu -1 than varum ena fulla ha india illa
// ##############################################################
// 5.
// let news = "India won the world India cup";
// match vanthu object ha return panum
// console.log(news.match("India"));
// otput
// [
//   'India',
//   index: 0,
//   input: 'India won the world India cup',
//   groups: undefined
// ]
// console.log(news.match(/india/gi)); // regex -> regular expression g-for global ha search panu i- case sensitive lam pakatha nu solurathu
// match output
// ["India", "India"];

// console.log(news.repeat(3));  // run this and know

// let news = "India won the world India cup";
// edhula frst india matum replace panum
// console.log(news.replace("India", "Pakistan"));
// edhu erukura ela indi yavum replace panum
// console.log(news.replaceAll("India", "Pakistan"));

// console.log(news.search(/INdia/gi)); gi use panalum frst erukura india than eduthukum edhula
