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


