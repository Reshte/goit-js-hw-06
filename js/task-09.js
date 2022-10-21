// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль
//  при клике на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", (event) => {
  console.log(getRandomHexColor());
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
});
