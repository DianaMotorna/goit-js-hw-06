function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const label = document.querySelector(".color");
btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  console.log(color);

  body.style.backgroundColor = color;
  label.textContent = color;
});
