const button = document.querySelector("#BtnMove");
const btnYes = document.querySelector(".Yes");
const h1Change = document.querySelector("h1");

button.addEventListener("mouseover", moveRandomly);

function moveRandomly() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  const limitX = window.innerWidth - width;
  const limitY = window.innerHeight - height;
  while (x < 0 || x > limitX) {
      x = Math.floor(Math.random() * window.innerWidth);
  }
  while (y < 0 || y > limitY) {
      y = Math.floor(Math.random() * window.innerHeight);
  }
  button.style.transform = `translate(${x}px, ${y}px)`;
}

btnYes.addEventListener("click", updateH1);

function updateH1(){
    h1Change.textContent = "Eu sempre soube que você era!";
}

