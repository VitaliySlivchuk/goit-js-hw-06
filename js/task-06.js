const formEl = document.querySelector("#validation-input");

formEl.addEventListener("blur", checkUserName);

function checkUserName() {
  let userName = formEl.value.length;
  console.log(userName);
  console.log(formEl.value);
  if (userName < formEl.dataset.length) {
    formEl.classList.add("invalid");
  } else formEl.classList.replace("invalid", "valid");
}
// const a = formEl.currentTarget.value.length;
// console.log(a);
