//Program Celcius to farnhite
let vnu=require('readline-sync')
let a=vnu.questionInt("Temprature  in Celcius =")
let b=a*9/5+32;
console.log('\x1b[36m%s\x1b[0m',"Temprature in Fahrenheit ",`${b}`);
//console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); 