const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

decrementEl.addEventListener("click", onDecrementButtonClick);
incrementEl.addEventListener("click", onIncrementButtonClick);

let counterValue = 0;

function onDecrementButtonClick() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
console.dir(counterValue);
