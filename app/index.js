import * as math from './math.js';
import $ from 'jquery';

const num1 = 6;
const num2 = 5;
const zero = 0;

console.log(`The total of ${num1} and ${num2} is ${math.add(num1,num2)}`);
console.log(`Divide by zero result: ${math.division(num1,zero)}`)

console.log(`multiply ${num1} and ${num2}: ${math.multiply(num1,num2)}`)

$('#root').append('<h1>Help Me</h1>')