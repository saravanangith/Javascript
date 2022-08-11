// objects
// use of objects -orae product athoda related ana spcification thirumba thirumba vantha object use panalam
// kela eg la mobilephone oda specification elam same for both iphone nad pixel so atha thuki object la potupan
// ###########################################################
// let phoneName = "Iphone pro";
// let phonePrice = 90000;
// let phoneColor = "Product red";
// let phoneRam = "6gb ram";
// let phoneRom = "512gb rom";

// let phoneName1 = "Pixel 6a";
// let phonePrice1 = 40000;
// let phoneColor1 = "white and black";
// let phoneRam1 = "6gb ram";
// let phoneRom1 = "512gb rom";

// let iphonePro = {
//   name: "Iphone Pro",
//   price: 90000,
//   color: "Product red",
//   ram: "6gb",
//   rom: "512gb",
//   isChargerPresent: false,
// };
// let pixel6a = {
//   name: "pixel 6a",
//   price: 40000,
//   color: "black and white",
//   ram: "8gb",
//   rom: "256gb",
// };
// console.log(iphonePro.name, pixel6a.price);
// ###########################################################################
// 2.
// edhula function keyword ku munadi ena name kuduthurukano athan function name
// this keyword pathi eg solirupan edhula
// let pixel6a = {
//   name: "pixel 6a",
//   price: 40000,
//   color: "black and white",
//   ram: "8gb",
//   rom: "256gb",
//   getDiscountedPrice: function () {
//     console.log(this);
//   },
// };

// console.log(pixel6a.getDiscountedPrice());

// output
// {
//   name: 'pixel 6a',
//   price: 40000,
//   color: 'black and white',
//   ram: '8gb',
//   rom: '256gb',
//   getDiscountedPrice: [Function: getDiscountedPrice]-edhu varikum this
// }
// undefined -edhu function la eduvum return panala athana edhu

// #############################################################
// 3.
// oru function la value ha return panirupan adhukana example
// let iphonePro = {
//   name: "Iphone Pro",
//   price: 90000,
//   color: "Product red",
//   ram: "6gb",
//   rom: "512gb",
//   isChargerPresent: false,
//   getDiscountedPrice: function () {
//     let discountedPrice = this.price - this.price * 0.2;
//     return discountedPrice;
//   },
// };

// let pixel6a = {
//   name: "pixel 6a",
//   price: 40000,
//   color: "black and white",
//   ram: "8gb",
//   rom: "256gb",
//   getDiscountedPrice: function () {
//     let discountedPrice = this.price - this.price * 0.2;
//     return discountedPrice;
//   },
// };

// console.log(
//   iphonePro.name,
//   iphonePro.price,
//   pixel6a.price,
//   iphonePro.getDiscountedPrice(),
//   pixel6a.getDiscountedPrice()
// );
// ####################################################
// 4.
// nested objects
// let Rajni = {
//   name: "Sivaji",
//   age: 75,
//   daughter: {
//     name: "Aishwarya",
//     husbandName: "Dhanush",
//     // edhuva "husband Name " eppidi kudutha work agauthu etha bracket la matum than acess pana mudiyum
//     getDaughter: function () {
//       console.log(this);
//     },
//   },
//   getRajni: function () {
//     console.log(this);
//   },
// };

// console.log(
//   Rajni.name,
//   Rajni.daughter,
//   Rajni.daughter.name,
//   Rajni.daughter.husbandName
// );
// console.log(Rajni.getRajni(), Rajni.daughter.getDaughter());
// ##############################################################
// Acutal ha Rajni.name eppidi dot vachu use panna oru prechana eruku string la key kudutha access pana mudiyathu
// and key thoki vera oru variable la set panitu antha varible ha dot use panni call pana varathu
// yeppa dot use pananum na key ku value therinja matum than dot use pananum
// bracket vanthu elathukum use panalam
// let property = "name";
// let husband = "husband Name";
// console.log(
//   //   Rajni.name, edhu error adikum
//   Rajni["name"],
//   Rajni[property],
//   Rajni["age"],
//   Rajni.daughter[husband]
// );

// #################################################
// 5.
// factory method
// common ha oru function ha create panitu atha use panikurathu

// function phoneCreator(
//   phoneName,
//   price,
//   color,
//   ram,
//   rom,
//   isChargerPresent,
//   discount
// )
// {
//   return {
//     name: phoneName,
//     price: price,
//     color: color,
//     ram: ram,
//     rom: rom,
//     isChargerPresent: isChargerPresent,
//     getDiscountedPrice: function () {
//       console.log(this);
//       let discountedPrice = this.price - this.price * discount;
//       return discountedPrice;
//     },
//   };
// }

// let iphonePro = phoneCreator(
//   "Iphone Pro",
//   90000,
//   "red",
//   "6gb",
//   "512gb",
//   false,
//   0.3
// );
// let pixel6a = phoneCreator(
//   "pixel 6a",
//   40000,
//   "black",
//   "8gb",
//   "256gb",
//   true,
//   0.2
// );

// console.log(iphonePro.getDiscountedPrice(), pixel6a.getDiscountedPrice());
// console.log(iphonePro.name, pixel6a.name);
// ################################################################
// 7.
// eppa parameter layum name key value pair la yum name:name eruntha
// name nu matum use panikalam kela eg eruku
// function getPerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let vasanth = getPerson("vasanth", 25);
// let sriram = getPerson("sriram", 22);
// console.log(vasanth, sriram);
