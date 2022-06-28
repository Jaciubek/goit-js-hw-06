const categoryCount = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoryCount}`);

const elementName = document.querySelectorAll("li.item").forEach((e) => {
  console.log(`Category: ${e.querySelector("h2").textContent}`);
  console.log(`Elements: ${e.querySelectorAll("li").length}`);
});