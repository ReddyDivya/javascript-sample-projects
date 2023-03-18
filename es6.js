/*
ES6
-------------------
const & let - provides more meaning than var
const - we can't reassign
let - block scope
*/
{
    let age = 20; 
    console.log(age);
}
//age = age + 1; // error as age is not defined

const name = 'React JS';
console.log(name);
//name = 'JS'; // error as Assignment to constant variable.

/*
-------------------------------------------------
//Arrow function -- much more concise way to write the functions. They have implicit returns.
*/
console.log(`Arrow function & template String`);
console.log(`...........................`);
const add = (a, b) => a + b;
console.log(`Add >>  ${add(21, 13)}`);//template String

const array = [1, 2, 3, 4, 5];
var sum = 0;
array.map((num) => sum += num)
console.log(`Sum >> ${sum}.`);//template String

//default Parameters
console.log(`...........................`);
console.log(`Default Parameters`);
const sub = (a, b = 2) => console.log(a - b);
sub(80);

//array destructuring
console.log(`...........................`);
console.log(`array destructuring`);
const array1 =  [11, 2, 53];
const [, second, third] = array1;
console.log(second);
console.log(third);

//Object destructuring
console.log(`...........................`);
console.log(`Object destructuring`);
const person = {
    Prsnname : 'divya',
    age : 23,
    city: 'hyd'
}
const {Prsnname, age, city} = person;
console.log(Prsnname);
console.log(age);
console.log(city);

//Rest Operator
console.log(`...........................`);
console.log(`Rest Operator`);
/*
reduce() - Calls the specified callback function for all the elements in an array.
The return value of the callback function is the accumulated result, and is provided
as an argument in the next call to the callback function.
*/
const rest = (...num) => console.log(num.reduce((a, b) => a + b, 0));
rest(1, 2, 3);

//Spread Operator
console.log(`...........................`);
console.log(`Spread Operator`);
const array2 = [1, 2, 3, 5];
console.log(...array2);