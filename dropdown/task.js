let button = document.querySelector(".dropdown__value");
let listOfItems = document.querySelector(".dropdown__list");
let items = Array.from(document.querySelectorAll(".dropdown__item"));

button.onclick = () => {
  let x = parseInt(button.getBoundingClientRect().left);
  listOfItems.style = `left: ${x}px`;
  listOfItems.className = "dropdown__list dropdown__list_active";
};

items.forEach((e) =>
  e.addEventListener("click", () => {
    listOfItems.className = "dropdown__list";
    button.innerText = `${e.querySelector(".dropdown__link").innerText.trim()}`;
    event.preventDefault(event);
  })
);

/*for (let i=0;i<items.length;i++){
  items[i].onclick = () => {
    listOfItems.className = "dropdown__list";
    button.innerText = `${items[i].querySelector(".dropdown__link").innerText.trim()}`;
    return false;
  };
}*/
