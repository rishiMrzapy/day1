let vnu=require('readline-sync');
let a=vnu.questionFloat("Enter Body Weight(kg) = ");
let b=vnu.questionFloat("Enter Height(cm) = ");
let c=a/((b/100)*(b/100));
console.log(c);
