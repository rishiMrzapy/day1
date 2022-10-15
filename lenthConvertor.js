let vnu=require('readline-sync');
let a=vnu.questionInt("Enter length in (Km) =");
let b=a*10000000;
console.log(`${b}`,"milimeters");
let c=a*39370.07874;//inch
console.log(`${c}`,"inches");
let d=a*100000;//cm
console.log(`${d}`,"centimeters");
let e=a*3280.8389950131//feet
console.log(`${e}`,"feet");