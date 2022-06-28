function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  amount = inputNumber.value;
  const box = [];
  
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    let color = getRandomHexColor();
  
    box.push(`<div style="height:${size}px ; width:${size}px ; background-color: ${color};"></div>`);
  }
  
  const markup = box.join("");
  return boxes.insertAdjacentHTML("afterbegin", markup);
}
function destroyBoxes() {
 const boxAll = document.querySelectorAll('#boxes div');
  boxAll.forEach(box => box.remove());
  inputNumber.value = 0;
};