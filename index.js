//1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateSum(a, b) 
{
    let sum = a - b;
    return sum;
}
console.log(calculateSum(30, 20));

//2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    return num % 2 === 0;
}
console.log(isOdd(3));  // Output: true
console.log(isOdd(4));  // Output: false

//3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin(arr) {
    return Math.min(...arr);
}
let numbers = [3, 5, 1, 8, 2, 10, 20];
console.log(findMin(numbers));

//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterEvenNumbers(numbersArray);

console.log(evenNumbers);

//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(numbers) {
    return numbers.slice().sort(function(a, b) {
        return b - a;
    });
}

let numbersArr = [3, 1, 4, 10, 5, 9, 2, 6, 5, 20];
let sortedArray = sortArrayDescending(numbersArr);

console.log(sortedArray); 

//6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;  // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
}
let myString = "Hello World";
let result = lowercaseFirstLetter(myString);

console.log(result);

//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}
let myStr = "Masum Billah";
let vowelCount = countVowels(myStr);

console.log(vowelCount);

//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
let numbArray = [10, 20, 30, 40, 50, 60];
let average = findAverage(numbArray);

console.log(average);



