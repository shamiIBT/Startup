"use strict";
///////////////////Selectors/////////////////
const menu = document.querySelector("#menu");
const menuContent = document.querySelector("#menu-content");
const cross = document.querySelector("#cross");
const body = document.querySelector("body");

/////////////////Conditional///////////////
let menuOpen = false;
//////////////////Functions/////////////////
const openMenu = function () {
  menuContent.style.right = "0px";
  menuOpen = true;
};
const closeMenu = function () {
  menuContent.style.right = "-400px";
  menuOpen = false;
};
//////////////////Event Listeners/////////////////

menu.addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});

cross.addEventListener("click", (e) => {
  e.preventDefault();
  if (menuOpen) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  e.preventDefault;
  if (e.key === "Escape" && menuOpen) {
    closeMenu();
  }
});
body.addEventListener("click", (e) => {
  if (e.target.id !== "menu-content" && e.target.id !== "menu") {
    closeMenu();
  }
});
