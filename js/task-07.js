const range = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");
  range.addEventListener("mousemove", () => {
    text.style.fontSize = `${range.value}px`;
  });