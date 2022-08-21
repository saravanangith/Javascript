// string is an immutable
// edhula oru particular value ku charater ha assign panna mudiyathu
// let a = "arun";
// a[0] = v;
// console.log(a);

// ###################################################

// slice always moves left to right

// let news = "Indians";

//    I  N  D  I  A  N  S
//    0  1  2  3  4  5  6
//   -7 -6 -5 -4 -3 -2  -1
// slice(2, 5);  // same as negative also
//       |  | ____________________
//       |                        |
//     (STARTING index)            (Ending index-1)

// console.log(news.slice(2, 5));
// console.log(news.slice(1, 6));
// console.log(news.slice(0, 6));
// console.log(news.slice(6));
// console.log(news.slice(3));
// console.log(news.slice(9)); // output empty ha varum
// console.log(news.slice(-5));
// console.log(news.slice(-6, -2));
//console.log(news.slice(-2, -6)); // output is empty bcoz its moving right to left
// console.log(news.slice(1, -2));

// slice pana sola antha variable la store agi erukura data marathu oru new variable la store pani than matanum
// let slicedNews = news.slice(0, -1);
// console.log(news, slicedNews);

// substring
//  same as slice than ana positive matum than eduthukum negative value eduthukathu
// slice kandu pudikurathuku munadi etha use panitu erunthanga
// let fname = "vasanth";
// console.log(fname.substring(0, 4));
// console.log(fname.substring(2, 6));
// console.log(fname.substring(2));
// console.log(fname.substring(-4, -1)); // output is empty

// substr-etha eduthutanga javascript la erunthae
// substr(0, 2); 0-index position 2-count
// let fname = "vasanth";
// console.log(fname.substring(0, 2)); // va
// console.log(fname.substr(0, 2)); // va
// console.log(fname.substr(1, 2)); // as
// console.log(fname.substring(1, 2)); // a
// console.log(fname.substring(3, 1)); // as //  edhula 3,1 nu eruku right words la so automatic ha 1,3 nu maridum
// console.log(fname.substring(1, 3)); // as
// console.log(fname.substr(5, 1)); // t

// split
// let news = "India is a good country";
// console.log(news.split()); // list kula pirinjirukum
//console.log(news.split(" ")); // space poruthu pirikum
// console.log(news.split(""));// oru oru character ha pirikum
//console.log(news.split("i")); // i vachu piriyum

// loops
// while loop
// for loop
// for of loop
// for in loop

// while loop ha condition theriyum ana count theriyathu appidina use panalam
// let num = 5;
// let count = 1;
// while (num > 0) {
//   //console.log(num, " ----------> ", count); // eppidiyum podalam
//   console.log(`${num} -----> ${count}`); // eppidiyum podalam

//   num -= 1;
//   count += 1;
// }

// decrement and increment
// pre and post
// let num = 10;
// num++ -post
// ++num -pre
// console.log(num++, num); // num++ la atha value erukum ana increase agirukum pakathula erukura num ku adhu poirukum
// thirumba antha num ha call pana tha adhuku assign agum adhu next line layo illa athae line layo adhelam matter kedaiyathu
// console.log(++num, num); //++num na mothala increment agitu than assign agum
// console.log(num++ + ++num);  //  10 + 12 //mothala frst num++ ku atha value erukum ana increase agirukum
//  next pogum ++num 11 nu increase anathu eppa etha patha odana 12 nu maridum

// console.log(num++ - ++num + num++ + ++num); // 10 - 12 + 12 + 14 // mothala elathum number ku convert panitu
// subract panu

// let num = 10;
// console.log(num--, num);
// console.log(--num, num);
// console.log(num++ - num-- + --num - ++num + --num + num-- - ++num); // 10 - 11 + 9 - 10 + 9 + 9 - 9

// for loop- count theriyum na use panalam
// let num = 10;

// for (let i = 0; i <= num; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }
// #####################################################
// let i = 0;
// for (; i <= num; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// ########################################
// let i = 0;
// edhuku artham true loop odita erukum loop poita erukum ctrl c command la kuduthu stop panu
// for (;;) {
//   console.log(i);
//   i += 1;
// }
// #############################################

// note while loop la semicolon vachrukan false vera potukan so adhoda end agidum kela poturukura
// line while loop oda searthu ena while loop ha semicolon potu mudichutan so next line execute agi
// while loop false nala semicolon ha reach panum aprm finish agidum nextline um execute agidum
// vasanth nu print agum and false nala velaila vanthurum

// while (false); (or) //while(false){}

// while (false) eppidi kudutha kela erukura log statement while loop oda attach agi erukum.

// {
//   console.log("vasanth");
// }

//  semicolon potathunala mudinjurum nextline pogathu
// 10>5  condition true agidum end agathu semicolon um reach agathu   line 138 adhoda mudinjurum execute agathu next line
// while (10 > 5);
// {
//   console.log("vasanth");
// }

// true nala execute agita erukum line number 142 matum semiclon kita kuda pogathu and empty ha execute agum
// while (true);
// {
//   console.log("vasanth");
// }

//   semi colon potukurathunala 148 -line oda for loop mudinju
//  aprm next line execute agutm
// for (let i = 0; i < 5; i++);
// // {
// //   console.log("print");
// // }

//        (or)
// mela erukurathuku edhuvum oru artham than

// for (let i = 0; i < 5; i++);

// console.log("print");
// ########################################
//
