let vnu=require('readline-sync')
let a=vnu.questionInt('Enter 1st Number = ')
let b=vnu.questionInt('Enter 2nd Number = ')
console.log("-------Number before swap--------")
console.log("1st number",a)
console.log("2nd number",b)
console.log("--------Number after swap--------")
let temp=a;
     a=b;
     b=temp;
     console.log("1st numbr ",a)
     console.log("2nd numbe",b)