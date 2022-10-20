const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// Первый вариант решения задачи.

// const listEl = document.querySelector("#ingredients");

// const makeListElement = (ingredients) => {
//   return ingredients.map((ingredient) => {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = ingredient;
//     itemEl.classList.add("item");
//     return itemEl;
//   });
// };

// const makeList = makeListElement(ingredients);

// listEl.append(...makeList);
// console.log(listEl);

//Второй вариант решения задачи.

const listEl = document.querySelector("#ingredients");
const listArr = [];

ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  listArr.push(itemEl);
});
listEl.append(...listArr);
