'use strict'
const favourite_courses = document.querySelector(".favourite_courses");
const favourite_cards = document.querySelector('.favourite_cards');
const favourite_title = document.querySelector(".favourite_title");
const favourite_btn = document.querySelector(".favourite");


favourite_btn.addEventListener("click", () => {
    favourite_courses.classList.toggle("active");
})
