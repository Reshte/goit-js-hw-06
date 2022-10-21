// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");
const inputValue = document.querySelector('[data-length="6"]');

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length < inputValue.dataset.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
