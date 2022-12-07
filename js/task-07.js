const sizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.dir(sizeControlEl);

sizeControlEl.addEventListener("input", onSizeControl);

function onSizeControl() {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
}
