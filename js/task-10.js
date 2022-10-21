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

let amount = 0;
inputRef.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

function createBoxes(amount) {
  createBtn.addEventListener("click", (event) => {
    const items = document.createElement("div") * amount;
  });
}
function destroyBoxes() {
  destroyBtn.addEventListener("click", (event) => {
    items.remove();
  });
}
