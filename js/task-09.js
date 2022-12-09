const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonChangeBg);

function onButtonChangeBg() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = `${bodyEl.style.backgroundColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor);
