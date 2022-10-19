const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//перевірити ще раз
const listEl = document.querySelector("#ingredients");

const makeListElement = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const makeList = makeListElement(ingredients);

listEl.append(...makeList);
console.log(listEl);
