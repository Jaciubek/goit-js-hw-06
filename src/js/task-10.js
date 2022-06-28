function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxes = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const value = document.querySelector("#controls input");



function createBoxes(amount) {

  amount = value.value;
  const boxArray = [];
  const box = document.createElement("div");

  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  boxArray.push(box);
  divBoxes.append(box);
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);