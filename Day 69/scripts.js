let number = 6;

function factorial (numbers){
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))
    let num = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(num)
}

factorial(number)