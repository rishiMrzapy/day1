let vnu=require('readline-sync')
let a=vnu.questionInt("1st number = ");
let b=vnu.questionInt("2nd number = ");
console.log("----Before swap-----")
console.log("1st  =  ",a)
console.log("2nd  =",b)
console.log("-----After swap-----")
let c=a*b;
a=c/a;
b=c/b;
console.log("1st ==",a)
console.log("2nd ==",b)