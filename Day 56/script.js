// console.log("Hey . I am good What about you");
// if else condition
let age1 = 40;

if(age1 > 45){
    console.log("Your are old.")
}
else{
    console.log("Your are Not Old ")
}
// if else Ladder
let age = 0;
let a = 19;
let b = 17;

if(age == 19){
    console.log( age + " You can drive.")
} else if (age => 18){
    console.log( a + " You also can drive.")
}
else if(age <= 18){
    console.log( b + " You can not drive.")
}
else{
console.log("Are you kidding.")
}

// Ternary Operator
let j = 19;
let k = 15;

let i = (j > k) ? (j + k) : (k - j);

/*
it translate : 
if (j > k){
 add  j + k
}
 else
 {
  sub k - j  
 }
*/