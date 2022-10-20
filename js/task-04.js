// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector(".value"),
};

let counterValue = 0;
console.log(counterValue);

refs.decrementBtn.addEventListener("click", onDecrementValue);
refs.incrementBtn.addEventListener("click", onIncrementValue);

function onIncrementValue(params) {
  counterValue = counterValue + 1;
  refs.value.textContent = counterValue;
  console.log(counterValue);
}

function onDecrementValue(params) {
  counterValue -= 1;
  refs.value.textContent = counterValue;
  console.log(counterValue);
}
