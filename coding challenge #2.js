/*
who has the higher BMI
mark's BMI higher or john's BMI is higher
*/

const massMark = 78;
const massJohn = 92;
const heightMark = 1.68;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark, BMIJohn, markHigherBMI);

if  (markHigherBMI){
    console.log('Mark BMI is higher than John');
} else {
    console.log('Mark BMI is not higher than John');
}