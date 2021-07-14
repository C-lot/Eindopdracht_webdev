const background = document.querySelector(".background");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const button = document.querySelectorAll(".button");

const toggleMenu = () => {
  burger.addEventListener("click", function () {
    menu.classList.toggle("menu-hide");
  });
};

const changeBackground = () => {
  button.forEach(function (i) {
    i.addEventListener("click", function (e) {
      background.removeAttribute("class");
      background.classList.add(e.target.classList[1]);
      menu.classList.toggle("menu-hide");
    });
  });
};

toggleMenu();
changeBackground();
