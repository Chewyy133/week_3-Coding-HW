//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

const ages = [3,9,23,64,2,8,28,93]

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 

console.log(ages[ages.length - 1] - ages[0]);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(8,55);

console.log(ages[ages.length - 1] - ages[0]);

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

