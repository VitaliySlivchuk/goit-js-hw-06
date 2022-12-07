const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingr = document.querySelector("#ingredients");

// const ingredientsEl = document.createElement("li");

// ingredientsEl.textContent = ingredients[0];
// ingredientsEl.classList = "item";

// ingr.append(ingredientsEl);

function makeIngredientList(ingredients) {
  const ingredientsEl = document.querySelector("#ingredients");
  const ingredientsList = document.createElement("li");
  ingredientsList.classList = "item";
  ingredientsList.textContent = ingredients;

  ingredientsEl.append(ingredientsList);
}

const elements = ingredients.map(makeIngredientList);
