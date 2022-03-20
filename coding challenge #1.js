/*
coding challenege
BMI = mass / height ** 2= mass / (height * height)

mass in kg and height in meter

Question 1: store Mark & John's mass & height in variables 
2: calculate both their BMIs using the formula (you can even implement both versions)
3: create a boolean variable 
*/

const massMark = 78;
const massJohn = 92;
const heightMark = 1.68;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark, BMIJohn, markHigherBMI);
