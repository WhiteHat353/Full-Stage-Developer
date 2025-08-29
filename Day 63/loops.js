let arr= [1 ,22,93,554,50,106];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

arr.forEach((value, index, arr)=>{

    console.log(value, index,arr);
})


let ar = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in ar) {
    if (ar.hasOwnProperty.call(ar, key)) {
        const element = ar[key];
        console.log(key, element);
    }
}

for (const element of arr) {
    console.log(element);
}