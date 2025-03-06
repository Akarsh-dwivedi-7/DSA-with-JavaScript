// Loop
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// print n hello world
// for(;;) {
//         console.log("Hello World");
//      }

// One to n Number and vice versa 
// 100--50
// for (let i = 100; i>49; i--) {
//     console.log(i);
// }

// Sum of n natural no. and factorial of no.
// var pr = prompt("Kaha Tak add Karawoge ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         var fact = 1;
//         for(var i = 1; i<=n; i++) {
//             fact = fact * i
//         }
//         console.log(fact);
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
// }
// }

// Factors of Numbers
// var pr = prompt("Give Your Number ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         for(var i = 1; i<=Math.floor(n/2); i++) {
//             if (n%i === 0) {
//                 console.log(i);
//             }
//         }
//         console.log(n);
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
// }
// }

// Prime Number
// var pr = prompt("Give Your Number ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         console.log(isPrime(n));
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
//   }
// }

// function isPrime(n) {
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i = 3; i<=Math.floor(Math.sqrt(n)); i+=2) {
//         if (n%i==0) return false;
//     }
//     return true;
// }

// break --> Stop the Loop
// for(var i = 1; i<23; i++) {
//     if (i === 11) break;
//     else console.log(i);
// }
// continue -->
// for(var i = 1; i<23; i++) {
//     if (i === 11) continue;
//     else console.log(i);
// }


// While Loop
// var i = 1;
// while (i < 23) {
//     console.log(i);
//     i++;
// }

// Sum of Digit

// var pr = prompt("Give Your Number ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         var sum = 0;
//         while (n>0) {
//             var rem = n%10;
//             sum = sum + rem;
//             n = Math.floor(n/10);
//         }
//         console.log((sum));
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
// }
// }

// Reverse the Number
// var pr = prompt("Give Your Number ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         var rev = 0;
//         while (n>0) {
//             var rem = n%10;
//             rev = rev*10 + rem;
//             n = Math.floor(n/10);
//         }
//         console.log(rev);
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
// }
// }

// Strong Number
// var pr = prompt("Give Your Number ?");

// if(pr === null) {
//     console.log("Cancelled");
// }
// else{
//     let n = Number(pr);

// if(isNaN(n)) {
//     console.log("Invalid Input");
// }
// else{
//     if (n > 0) {
//         var sum = 0;
//         var copy = n;
//         while (n>0) {
//             var rem = n%10;
//             var fact = 1;
//             for(var i = 1; i <= rem; i++) {
//                 fact = fact*i;
//             }
//             sum = sum + fact;
//             n = Math.floor(n/10);
//         }
//         if (copy === sum) {
//             console.log("Strong Number: "+ sum);
//         }
//         else{
//             console.log("Not Strong Number");
//         }
//     }
//     else{
//         console.log("Should be +ve and More Than Zero");
//     }
// }
// }

// do while
// var i = 1;
// do{
//     console.log("Hello");
//     i++;
// }
// while(i<=10);

// Guess Number
let random = Math.floor(Math.random()*100) + 1

let guess = -1;
while (guess !== random) {
    guess = Number(prompt("Guess the Number"));
    if (isNaN(guess) || guess<1 || guess>100) {
        console.log("Try Again between 1 - 100");
        continue;
    }
    if (guess>random) {
        console.log("To High, Try Again");
    }
    else if (guess<random) {
        console.log("To Low, Try Again");
    }
    else{
        console.log("Congrats 🎉 and number was ", guess);
    }
}