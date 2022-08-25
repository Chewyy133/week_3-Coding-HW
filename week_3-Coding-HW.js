//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

const ages = [3,9,23,64,2,8,28,93]

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 

console.log(ages[ages.length - 1] - ages[0]);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(8,55);

console.log(ages[ages.length - 1] - ages[0]);

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
totalAges = 0

for (let i = 0; i < ages.length; i++) {
    totalAges = totalAges + ages[i]
    averageAge = totalAges / ages.length
}

console.log(averageAge);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
 const namesLetters = [3, 5, 3, 5, 4, 3]

 totalNamesLetters = 0

 for (let i = 0; i < namesLetters.length; i++) {
    totalNamesLetters = totalNamesLetters + namesLetters[i]
    averageNamesLetters = totalNamesLetters / namesLetters.length
 }

 console.log(averageNamesLetters);

 //b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (var i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}

//3.	How do you access the last element of any array?

console.log(ages[ages.length - 1]);
console.log(names[names.length - 1]);

//4.	How do you access the first element of any array?

console.log(ages[0]);
console.log(names[0]);

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sum = 0

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log(sum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function repeat(word, n)
{
    let s1 = word

    for (let i = 1; i < n; i++)
    word += s1;
    
    return word;
}

let word = "Can";
let n = 4; 
console.log(repeat(word, n));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 

function createFullName(firstName, lastName) {
    return firstName+ ' ' + lastName;
}
console.log(createFullName('Jesus', 'Morales'));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    let array1 = [21, 15, 85, 2] 
    let add = 0
    for (let i = 0; i < array1.length; i++){
        add += array1[i];
    }
    console.log(add);

function statement(add){
    if (add >= 100) {
        return true
    }
    return '' ;
}
console.log(statement(add));

