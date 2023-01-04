// мне непонятно "Сделайте акцент на том, что таких механизмов переключения может быть несколько на странице"
// что конкретно имеется ввиду? По этой причине сделал 2 варианта, один через функцию, один просто


//Вариант 1

let tabs = document.querySelectorAll(".tabs");

function choosing(tabs) {
  let tabNavigation = tabs.querySelector(".tab__navigation");
  let tab = Array.from(tabNavigation.querySelectorAll(".tab"));

  let tabContents = document.querySelector(".tab__contents");
  let tabContent = Array.from(tabContents.querySelectorAll(".tab__content"));

  tab.forEach((e) =>
    e.addEventListener("click", () => {
      tab.forEach((e) => (e.className = "tab"));

      tabContent.forEach((e) => (e.className = "tab__content"));
      e.className = "tab tab_active";
      tabContent[tab.indexOf(e)].className = "tab__content tab__content_active";
    })
  );
}
tabs.forEach((e) => choosing(e));

//Вариант 2

/*let tabs = document.querySelector("#tabs1");

let tabNavigation = tabs.querySelector(".tab__navigation");
let tab = Array.from(tabNavigation.querySelectorAll(".tab"));

let tabContents = document.querySelector(".tab__contents");
let tabContent = Array.from(tabContents.querySelectorAll(".tab__content"));

tab.forEach((e) =>
  e.addEventListener("click", () => {
    tab.forEach((e) => (e.className = "tab"));

    tabContent.forEach((e) => (e.className = "tab__content"));
    e.className = "tab tab_active";
    tabContent[tab.indexOf(e)].className = "tab__content tab__content_active";
  })
);
*/
