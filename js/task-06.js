const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;
  const length = inputElement.dataset.length;

  if (inputValue.length === Number(length)) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
