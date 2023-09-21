'use strict'
const rootElement = document.documentElement;

const favourite_courses = document.querySelector(".favourite_courses");
const favourite_cards = document.querySelector('.favourite_cards');
const favourite_title = document.querySelector(".favourite_title");
const favourite_btn = document.querySelector(".favourite");

const dark_btn = document.querySelector(".dark");
let dark_theme = false


favourite_btn.addEventListener("click", () => {
    favourite_courses.classList.toggle("active");
})

dark_btn.addEventListener("click", () => {
    if (!dark_theme) {
        dark_theme = true;
        rootElement.setAttribute("data-theme", "dark");
    } else {
        dark_theme = false;
        rootElement.setAttribute("data-theme", "light");
    }

})
