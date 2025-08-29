let arr = [1, 2, 3, 4, 5, 6, 7];
// index   0, 1, 2, 3, 4, 5, 6

arr[5] = 55;
console.log(arr);

console.log(arr.length);

// console.log(arr[0])  --> print 1
console.log(arr[0])
console.log(arr[4])
console.log(arr[2])

console.log(arr.toString());

console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr.push(20));

console.log(arr.shift());

console.log(arr);

console.log(arr.unshift(1));
console.log(arr);

let a1 = [1, 2, 3];
let b1 = [4, 5, 6];
let c1 = [7, 8, 9];

let retrun = a1.concat(b1, c1);
console.log(retrun);

let a2 = [2, 1, 5, 8, 10, 3];
let b2 = a2.sort((x, y) => x - y);

console.log(b2);

let c2 = [1, 2, 3, 4, 5];

let d2 = c2.splice(2, 4);
console.log(c2);
console.log(d2);