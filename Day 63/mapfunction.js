let a = [1, 13, 9, 7, 11];
let newarr2 = [];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    newarr2.push(element ** 2);
}

let newarr = a.map((e) => {
    return e ** 2
})

console.log(newarr)

const greatethanseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(a.filter(greatethanseven))

let name = "AbdulJabbar";

console.log(Array.from("AbdulJabbar"));