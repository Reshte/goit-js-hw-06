// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет
// их в div#boxes. Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divEl = document.querySelector("#boxes");

let amountInput = 0;
const width = 30;
const height = 30;
const items = [];

inputRef.addEventListener("input", addBoxes);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function addBoxes(event) {
  amountInput = Number(event.currentTarget.value);
}

function createBoxes(amount) {
  amount = amountInput;
  for (let i = 1; i <= amount; i += 1) {
    const li = document.createElement("div");
    li.style.backgroundColor = getRandomHexColor();
    li.style.width = `${width + (i - 1) * 10}px`;
    li.style.height = `${height + (i - 1) * 10}px`;
    items.push(li);
    divEl.append(...items);
  }
}

// второй вариант
//  for (let i = 1; i <= total; i += 1) {
//    size += 10;
//    const div = document.createElement("div");
//    div.style.width = size + "px";
//    div.style.height = size + "px";
//    div.style.backgroundColor = getRandomHexColor();
//    markup.push(div);
//  }
// boxes.append(...markup);

function destroyBoxes() {
  inputRef.value = "";
  divEl.innerHTML = "";
}
