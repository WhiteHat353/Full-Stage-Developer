let random = Math.random();
console.log(random);
let a = prompt("Enter First Number : ");
let b = prompt("Enter Operation : ");
let c = prompt("Enter Second Number :");

let obj = {
    "+": "-",
    "*": '+,',
    "-": '/,',
    "/": "**"
}

if (random) {
    console.log("The result is ${a} ${b} ${c}");
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}