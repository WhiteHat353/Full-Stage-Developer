console.log("This is a tutorial of Loops");

// loops
let a = 0;
console.log(a);
console.log(a + 1);
console.log(a + 2);
console.log(a + 3);
console.log(a + 4);

//for loop
for (let i = 0; i < 20; i++) {
    console.log(a + i);
}

// for In loops

let obj = {
    name: "Abdul Jabbar",
    role: "Programming",
    company: "CodeWithAJ"
}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key, element);
    }
}

// forof loop
for (const a of "Abduljabbar") {
    console.log(a);
}


// while loop
let b = 5;
while (b > 1) {
    console.log(b);
    b--;
}

let f = 10;
while (f >= 1) {
    console.log(f);
    f--;
}

// do-while loop

let k = 4;
do {
    console.log(k);
    k--;
} while (k > 1);