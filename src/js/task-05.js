const inputEl = document.querySelector("#name-input");
const tittleEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  tittleEl.textContent = event.currentTarget.value;
  console.log(tittleEl.textContent);
  if (tittleEl.textContent === "") {
    tittleEl.textContent = "Anonymous";
  }
}
