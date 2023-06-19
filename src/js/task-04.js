const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const targetEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue--;
  targetEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  targetEl.textContent = counterValue;
});
