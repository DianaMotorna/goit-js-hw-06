const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const targetContainer = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => {
  const el = document.createElement("li");
  el.classList.add("item");
  el.textContent = ingredient;
  return el;
});

targetContainer.append(...list);
