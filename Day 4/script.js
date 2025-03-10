// let arr = [];
// arr.push(100);
// arr.push(false);
// arr.push(true);
// arr.push("Akarsh");
// arr.push({}); // Element add
// console.log(arr[1]);
// console.log(arr);
// arr.pop(); // Last element Gayab Hoga
// console.log(arr);


// let arr = [];
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// arr[7] = 80; 
// console.log(arr);


// let arr = new Array(3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// arr[10] = 110; // [10, 20, 30, 40, 6 emapty, 110];
// console.log(arr);

// let arr = new Array(3);
// arr.push(10);
// console.log(arr); // [3 empty, 10]

// let arr = new Array(5);

// for(let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter The Value"));
// };
// console.log(arr);

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [2, 78, 100, 4, 55];
// let max = arr[0];

// for(let i = 1; i < arr.length; i++) {
//    if (max < arr[i]) {
//     max = arr[i]
//    }
// }
// console.log(max);

// let arr = [2, 78, 100, 4, 55];
// let min = arr[0];

// for(let i = 1; i < arr.length; i++) {
//    if (min > arr[i]) {
//     min = arr[i]
//    }
// }
// console.log(min);

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++) {
//     if (max < arr[i]) {
//         sMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > sMax && max != arr[i]) {
//         sMax = arr[i];
//     }
// }
// console.log(max);
// console.log(sMax);

// Reverse Array with extra space!
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.reverse());

// let temp = new Array(arr.length);

// let j = 0;
// for(let i = arr.length-1; i>=0; i--) {
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);


// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

// let i = 0, j = arr.length-1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// } 

// console.log(arr);

// let arr = [1, 1, 0, 1, 0, 0, 1, 1, 1, 0];
// let i = 0, j = 0;

// while(i < arr.length) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     };
//     i++;
// };
// console.log(arr);
