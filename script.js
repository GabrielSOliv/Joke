const button = document.querySelector("#BtnMove");
const btnYes = document.querySelector(".Yes");
const h1Change = document.querySelector("h1");

button.addEventListener("mouseover", moveRandomly);

function moveRandomly() {
let x = Math.floor(Math.random() * 400);
let y = Math.floor(Math.random() * 400);
button.style.transform = `translate(${x}px, ${y}px)`;
}

btnYes.addEventListener("click", updateH1);

function updateH1(){
h1Change.textContent = "Eu sempre soube que você era!";
}

