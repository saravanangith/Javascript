//
// comparison operators
// let a = 10;
// let b = 10;
// double equal pota value matum than check pannum datatype ha check pannathu
// console.log(a == b);

// let a = 10;
// let b = "10";
// console.log(a == b); // == checks only value but not datatype
// console.log(a === b); //  checks values and datatype

// let a = 10;
// let b = "10";
//mela erukura double equals ku opposite != edhu  eppidi compare panuran a!=b so eppidi yosi
// (10==10 so true varum adhoda viceversa than answer athavathu false than answer entha mathiri tha triple not equals kum)
//mela erukura triple equals ku opposite !== edhu
// console.log(a != b);
// console.log(a !== b);

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(5 >= 5);
// console.log(10 <= 5);

// ternary operator -> condtion ? true statement : false statement

// 1 > 5 ? console.log("greater") : console.log("smaller");

// string

// let firstName = "Vasanthkumar";
// let lastName = "Vinayagam";

// // console.log(firstName + " " + lastName);

// output-Vasanthkumar Vinayagam

// // console.log("'" + firstName + "'" + " is a good boy");

// // output-'Vasanthkumar' is a good boy

// // console.log('"' + firstName + '"' + " is a 'good' boy");

// // output- "Vasanthkumar" is a 'good' "boy"

// literal-storing some value in a variable is called a literal
// string literal-storing string data

// // string template literals -> multiple lines and easy concatenation use panurathu eg kela eruku

// edhula firstname ku double quote and single quote use panirukan appidiyum use agum nu nurathukaga use
// use panirukan

// console.log(
//   `"${firstName}' is a 'good' "boy". ${firstName}'s lastname is  ${lastName}`
// );
// output-"Vasanthkumar' is a 'good' "boy". Vasanthkumar's lastname is  Vinayagam

// eppidi kudukuromo appidiya varum see below examples
// let poem = `Oh god beautiful, oh god beautiful
// at thy feet, oh god beautiful`;
// console.log(poem);

// weird javascript things
// console.log(5 + 5); // 10
// console.log(5 + "5"); // 55 // mothal number 5 ha pakum aprm pakathula ethachu number erukanum pakum
// eruntha add panum appidi illa string eruntha concatenate panidum
// console.log(5 + 5 + "5"); // 105 // 5 and 5 ha + panidum aprm string la kuduthuruka 5 ha concatenate panidum
// console.log("5" + 5); // 55 // starting ha concatenate panidum ena mothalaya string eruku
// console.log("5" + 5 + 5); // 555 //eppidina first concatenta "55"+5 aprm enoru vati concatenate 555
// console.log("5" + "5"); // 55
// console.log("ab" + 5); // ab5
// console.log("ab" + "5"); // ab5
//console.log(a + 5); //error than varum ascii value lam edukathu

// subraction ku entha rule um illa string la kuduthalum seri number ha consider panitu than subract panidum
// but string kula ethachu character eruntha NAN than varum Not a Number.

// console.log(10 - 5); // 5
// console.log("10" - 5); // 5
// console.log(10 - "5"); // 5
// console.log("10" - "5"); // 5
// console.log("ab" - "5"); // NaN -> Not a Number
// console.log("ab" - "bc"); // NaN -> Not a Number
//console.log(a - 5); //edhuku NaN than

// practice
// console.log("a" + "4");//output -a4
// console.log("4" + 4);////output -44
// console.log("4" - 4); //output -0
// console.log("10" - "6"); //output -4
// console.log("b" - "a"); //output -NAN
// console.log(2 + 4 - '10' + 10); // //output -6 // first 2+4=6 =>(6-'10'+10) 6-'10'=-4 =>(-4+10)=6
// console.log(2 + '4' + '-10' + 10); // output- 24-1010 // 2+'4'=24=> (24+('-10')+10)=>'24-10'=> '24-10' +10 =>24-1010
