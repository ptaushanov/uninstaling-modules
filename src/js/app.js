import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter(isEven);
  
  const createListItem = number => {
    const el = document.createElement("li")
    el.textContent = number
    return el;
  }

  const appendNumber = number => ul.appendChild(createListItem(number))
  filteredArray.forEach(appendNumber)
  
});
