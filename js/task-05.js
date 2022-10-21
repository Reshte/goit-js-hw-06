// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее
// значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
const defaultText = outputText.textContent;

inputText.addEventListener("input", onOutputText);

function onOutputText(event) {
  if (event.currentTarget.value) {
    outputText.textContent = event.currentTarget.value;
    return;
  }
  outputText.textContent = defaultText;
}
