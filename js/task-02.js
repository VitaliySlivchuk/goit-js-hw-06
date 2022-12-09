const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const items = ingredients.map((item) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add = "item";
  ingredientsList.textContent = item;
  console.log(ingredientsList);
  return ingredientsList;
});

ingredientsEl.append(...items);
