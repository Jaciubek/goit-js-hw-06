const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');


let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);
