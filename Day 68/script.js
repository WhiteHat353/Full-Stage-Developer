// document.body.children[0].children[2].style.backgroundColor = "red"


let Boxes = document.getElementsByClassName("box");
console.log(Boxes);

Boxes[1].style.background = "purple";
Boxes[4].style.background = "green";
Boxes[0].style.background = "green";
Boxes[4].style.color = "white";

let red = document.getElementById('red').style.background = 'red';

console.log(red);

document.querySelector(".box").style.backgroundcolor = 'red';



document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundcolor = "red";
})