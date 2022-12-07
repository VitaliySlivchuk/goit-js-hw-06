const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

const newArr = [...listEl].map((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent} Elements: ${item.lastElementChild.children.length}`
  );
});
// console.log(listEl.lastElementChild.children.length);
