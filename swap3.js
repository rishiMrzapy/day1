let vnu=require('readline-sync')
let a=vnu.questionInt(" Entr valu for a == " );
let b=vnu.questionInt("Entr valu for b == ");
let c=vnu.questionInt("Entr valu for c == ");
console.log("============Before Swap==========");
console.log("a ==",a) 
console.log("b ==",b)
console.log("c ==",c)
console.log("===========Aftr swap =========");
let temp=a;
a=c;
c=b;
b=temp;
console.log("a ==",a) 
console.log("b ==",b)
console.log("c ==",c)
