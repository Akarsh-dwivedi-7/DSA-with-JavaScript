// Length
let str = "Hello World";
console.log(str.length); // Output: 11

// slice(start, end)
let str1 = "JavaScript";
console.log(str1.slice(0, 4)); // Output: "Java"
console.log(str1.slice(4)); // Output: "Script"
console.log(str1.slice(-6)); // Output: "Script"

// substring(start, end)
let str2 = "JavaScript";
console.log(str2.substring(0, 4)); // Output: "Java"
console.log(str2.substring(4, 10)); // Output: "Script"

//  substr(start, length)
let str3 = "JavaScript";
console.log(str3.substr(4, 6)); // Output: "Script"

// toUpperCase() & toLowerCase()
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
console.log(str.toLowerCase()); // Output: "hello world"

// concat()
let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(" ", str5)); // Output: "Hello World"

// trim()
let str6 = "   Hello World   ";
console.log(str6.trim()); // Output: "Hello World"

// indexOf(substring) & lastIndexOf(substring)
let str7 = "Hello World";
console.log(str7.indexOf("o")); // Output: 4
console.log(str7.lastIndexOf("o")); // Output: 7

// includes(substring)
let str8 = "JavaScript is great";
console.log(str8.includes("Java")); // Output: true
console.log(str8.includes("Python")); // Output: false

// startsWith(substring) & endsWith(substring)
let str9 = "Hello World";
console.log(str9.startsWith("Hello")); // Output: true
console.log(str9.endsWith("World")); // Output: true

//  replace(old, new) & replaceAll(old, new)
let str10 = "Hello World, Hello Universe";
console.log(str10.replace("Hello", "Hi")); 
// Output: "Hi World, Hello Universe"

console.log(str10.replaceAll("Hello", "Hi")); 
// Output: "Hi World, Hi Universe"

// split(separator)
let str11 = "apple,banana,grapes";
console.log(str11.split(",")); // Output: ["apple", "banana", "grapes"]

// charAt(index) & charCodeAt(index)
let str12 = "Hello";
console.log(str12.charAt(1)); // Output: "e"
console.log(str12.charCodeAt(1)); // Output: 101

// 1️⃣ Print each character on a new line
let str13 = "Hello";
for (let char of str13) {
    console.log(char);
}

// ️2️⃣ Print in reverse order
let str14 = "Hello";
console.log(str14.split("").reverse().join("")); // Output: "olleH"

// 3️⃣ Check if string is palindrome
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// 4️⃣ Toggle each character (uppercase → lowercase, vice versa)
function toggleCase(str) {
    return str
        .split("")
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join("");
}
console.log(toggleCase("Hello")); // Output: "hELLO"

// 5️⃣ Frequency of each character
function charFrequency(str) {
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }













