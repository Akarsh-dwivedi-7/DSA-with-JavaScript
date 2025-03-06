// Valid Voter
// var ans = Number(prompt("What is your Age??"));

// if(isNaN(ans)) {
//     console.log("Invalid Input");
// }
// else if (ans >= 18) {
//     console.log("You Are Valid For Voting");
// }
// else {
//     console.log("You Are Not Valid For Voting");
// };

// Shop Discount
// let amount = Number(prompt("What is the Final Amount"));

// if(amount > 0 && amount <= 5000){
//     console.log(amount);
// }
// else if(amount > 5000 && amount <= 7000){
//     console.log(amount - Math.floor((5*amount)/100));
// }
// else if(amount > 7000 && amount <= 9000){
//     console.log(amount - Math.floor((10*amount)/100));
// }
// else if(amount > 9000){
//     console.log(amount - Math.floor((20*amount)/100));
// } 
// else{
//     console.log("Wrong Input");
// }

// 2nd Step ===>
    
// let amount = Number(prompt("What is the Final Amount"));
// let dis = 0;
// if(amount > 0 && amount <= 5000){
//     dis = 0;
// }
// else if(amount > 5000 && amount <= 7000){
//     dis = 5;
// }
// else if(amount > 7000 && amount <= 9000){
//     dis = 10;
// }
// else if(amount > 9000){
//     dis = 20;
// } 
// console.log(amount - Math.floor((dis*amount)/100));

// // Bijli Bill
// let unit = Number(prompt("Enter Your Unit")); // 700
// let amount = 0;

// if(unit > 400) {
//     amount = (unit - 400) * 13; // 3900
//     unit = 400;
// }
// if(unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8; // 1600
//     unit = 200;
// }
// if(unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 6; // 600
//     unit = 100;
// }
// amount += unit * 4; // 400
// console.log(amount);

// let unit = Number(prompt("Enter Your Unit")); 
// let amount = 0;

// if(unit > 400) {
//     amount += (unit - 400) * 13; 
//     unit = 400; 
// }
// if(unit > 200) {
//     amount += (unit - 200) * 8;
//     unit = 200; 
// }
// if(unit > 100) {
//     amount += (unit - 100) * 6;
//     unit = 100; 
// }
// amount += unit * 4; 

// console.log(amount);

// INR Denomination
// let amount = Number(prompt("Enter Your Money:"));
// if(amount > 500) {
//     console.log("500 Note: " + Math.floor(amount/500)); // 9 Note of 500
//     amount = amount % 500;  // 323
// }
// if(amount > 200) {
//     console.log("200 Note: " + Math.floor(amount/200));
//     amount = amount % 200;
// }
// if(amount > 100) {
//     console.log("100 Note: " + Math.floor(amount/100));
//     amount = amount % 100;
// }
// if(amount > 50) {
//     console.log("50 Note: " + Math.floor(amount/50));
//     amount = amount % 50;
// }
// if(amount > 20) {
//     console.log("20 Note: " + Math.floor(amount/20));
//     amount = amount % 20;
// }
// if(amount > 10) {
//     console.log("10 Note: " + Math.floor(amount/10));
//     amount = amount % 10;
// }
// if(amount > 5) {
//     console.log("5 Note: " + Math.floor(amount/5));
//     amount = amount % 5;
// }
// if(amount > 2) {
//     console.log("2 Note: " + Math.floor(amount/2));
//     amount = amount % 2;
// }
// if(amount === 1) {
//     console.log("1 Note: " + amount);
// }

/* ------------------------------------------------------------------------------------------------------------------- */

// Ternary Operator --> ? :
// c ? (true Ka code hoga) : (false ka code)
// console.log(14 > 13 ? "Ohh! Yes It is True" : "Ohh! Yes It is False");

// Nested Ternary Operator --> 
// let num = Number(prompt("Give Your Number:"))
// console.log(num > 0 ? "Positive No." : num < 0 ? "Negative No." : "Zero");

// Switch and One Case Handling Multiple Values
// let day = 8;

// switch(day) {
//     case 1: console.log("Monday");
//     break

//     case 2: console.log("Tuesday");
//     break

//     case 3: console.log("Wednsday");
//     break

//     case 4: console.log("Thursday");
//     break

//     case 5: console.log("Friday");
//     break

//     case 6: console.log("Saturday");
//     break

//     case 7: console.log("Sunday");
//     break

//     default: console.log("Invalid");
// }

// let num = 0.1 + 0.2;

// switch(num) {
//     case 0.3: console.log("Hello 0.3");
//     break

//     case 0.5: console.log("Hello 0.5");
//     break

//     default: console.log("No");
// }