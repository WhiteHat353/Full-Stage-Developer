let a = prompt("Enter First Number : ")


let b = prompt("Enter Second Number : ")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this not a expectable.")
}

function main(){

    let sum = parseInt(a) + parseInt(b)
    let r = 1;
    try {
        console.log("The Sum of 1st and 2nd Numbers is :", sum*r);
        return true
    } catch (error) {
        console.log("Error aa gaya bhaii...")
        return false
    }
    finally{
        console.log("Today is good.")
    }
}

let c = main()