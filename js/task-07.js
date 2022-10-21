// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const inputControl = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = "10px";

inputControl.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
