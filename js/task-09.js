function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 const changeColor = document.querySelector(".change-color");
  const span = document.querySelector(".color");
  const changeColorHandler = () => {
    const color = getRandomHexColor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    document.body.style.transition = "background 500ms ease-in-out";
  };

  changeColor.addEventListener("click", changeColorHandler);
