const formEl = document.querySelector("#validation-input");

formEl.addEventListener("blur", checkUserName);

function checkUserName() {
  let userName = formEl.value.length;

  if (userName !== +formEl.dataset.length) {
    formEl.classList.add("invalid");
  } else formEl.classList.replace("invalid", "valid");
}
