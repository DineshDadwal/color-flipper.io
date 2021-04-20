const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink", "orange", "skyblue", "black", "lightgreen", "yellow", "white", "brown", "chocolate", "grey", "darkblue"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
const randomNumber = getRandomColor();
console.log(randomNumber)
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
})

function getRandomColor(){
   return Math.floor(Math.random() * colors.length);
}