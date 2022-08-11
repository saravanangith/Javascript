// conditional statements
//
// Switch case -> It is not recommended to use
// number = 0;

// ela case kelayum break kandipa erukanum
// break podalana elam ha print agum
// number = 0;
// switch (number) {
//   case 0:
//     console.log("Sunday");

//   case 1:
//     console.log("monday");

//   case 2:
//     console.log("tuesday");

//   case 3:
//     console.log("wednesday");

//   case 4:
//     console.log("thursday");

//   case 5:
//     console.log("friday");

//   case 6:
//     console.log("saturday");
// }

// output
// Sunday;
// monday;
// tuesday;
// wednesday;
// thursday;
// friday;
// saturday;
// #########################################################
// enga 0 to 6 varikum eduvena kduthukala for eg 2 kudutha anga poi print panitu break panidum
// default en kuduthom na eppa more than 6 kudutha default parint agum
// switch (number) {
//   case 0:
//     console.log("Sunday");
//     break;

//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("Invalid data");
//     break;

// }
// ###########################################

//  break statement ha enga vena podalam  eppa 7 kuduthathunala ela edathulayum poi checkpanum
// aprm kadasiya default ku varum atha print panum enga default ku break kudukala so case 6 um execute panuthu break kudutha
// execute panathu
// number = 7;
// switch (number) {
//   case 0:
//     console.log("Sunday");
//     break;

//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   default:
//     console.log("Invalid data");

//   case 6:
//     console.log("saturday");
//     break;
// }
// output
// Invalid data
// saturday
// ############################################################
//  edhula case 0 erandu vati kuduthurukan yeppidi execute agumna
// mothala 0 ku pogum print statement execute pani break panidum
// number=0
// switch (number) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 0:
//     console.log("Sunday duplicate");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("Invalid data");
//     break;
// }

// ###########################################################

// bitwise operators
// bitwise AND -> &

//  1 1 = 1
// 1 0 = 0
// 0 1 = 0
// 0 0 =0
// eppa 5 ha binary ha matha porom
// 16 8 4 2 1
//  0 0 1 0 1 - ethoda output 5 yeppidi na 4ku nera 1poturukan 1nuku nera 1 poturukan eranduthum add panna 5 varum
//  eppa 3 ku  binary patha 00011

// 0 0 1 0 1
// 0 0 0 1 1
// 0 0 0 0 1
// console.log(5 & 3); //output 1
// console.log(15 & 7);

// bitwise OR -> |

// 1 0 = 1
// 0 1 = 1
// 1 1 = 1
// 0 0 = 0
// 5&3 ku eluthirukan
// 0 0 1 0 1
// 0 0 0 1 1
// -------------
// 0 0 1 1 1 - output 7
// console.log(5 | 3);
// console.log(15 | 7);

// bitwise NOT -> ~

// edhuku oru formula eruku -(num+1) num la input value padanum
// console.log(~-5);
// console.log(~15);

// bitwise XOR ^
//  xor- same ha eruntha zero diff ha eruntha one

// 0 0 = 0
// 1 1 = 0
// 1 0 = 1
// 0 1 =1
// 5&3 ku eluthirukan

// 0 0 1 0 1
// 0 0 0 1 1
// -------------
//  0 0 1 1 0 =output 6
// console.log(5 ^ 3);
// console.log(15 ^ 7);

// left shift <<
// 5 << 1;  5 vanthu binary la convert panitu 1  vanthu ethana shift move aganum nu so one pna move agum  7 << 2 =edhula erandu erandu shift ha move aganum nu
// screenshots ha paru
// console.log(5 << 1);
// console.log(7 << 2);
// console.log(7 << 12);

// edhukum screenshot ha paru
// // right shift >>
// console.log(5 >> 1); 5 ha 1 oru panga prircha 2.5 so 2 eduthukum output
// console.log(8 >> 2); 8  ha 2 panga prircha 2 output 2
// console.log(7 >> 12); 7 ha 4 vathu pangu pirika solava 0 agidum so 12th pangum 0 thana ans zero than
