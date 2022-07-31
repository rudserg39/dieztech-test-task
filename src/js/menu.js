// Burger

const burger = document.querySelector(".header__burger");

burger.classList.remove("header__burger_invisible");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
});

burger.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    burger.classList.toggle("header__burger_active");
  }
});

// Menu

const navPanel = document.querySelector(".header__nav");

navPanel.classList.remove("header__nav_open");
navPanel.classList.add("header__nav_close");

const toggleNavPanel = () => {
  if (navPanel.classList.contains("header__nav_close")) {
    navPanel.classList.remove("header__nav_close");
    navPanel.classList.add("header__nav_open");
  } else {
    navPanel.classList.remove("header__nav_open");
    navPanel.classList.add("header__nav_close");
  }
};

burger.addEventListener("click", () => {
  toggleNavPanel();
});

burger.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    toggleNavPanel();
  }
});