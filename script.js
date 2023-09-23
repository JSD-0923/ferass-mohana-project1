'use strict';

const rootElement = document.documentElement;

const favourite_courses = document.querySelector(".favourite_courses");
const favourite_cards = document.querySelector('.favourite_cards');
const favourite_title = document.querySelector(".favourite_title");
const favourite_btn = document.querySelector(".favourite");

const dark_btn = document.querySelector(".dark");

favourite_btn.addEventListener("click", () => {
    favourite_courses.classList.toggle("active");
})

dark_btn.addEventListener("click", () => {
    if (localStorage.getItem("theme-data") == "light") {
        rootElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme-data", "dark");
    } else if (localStorage.getItem("theme-data") == "dark") {
        rootElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme-data", "light");
    }
})

// Remove the window 'load' event listener

// Check for saved theme when the page loads
const savedTheme = localStorage.getItem('theme-data');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("select-btn-text")) {
        event.target.closest('.select-container').classList.toggle("active");
    }
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("list_btn")) {
        let parent = event.target.parentNode;
        let prevSibling = parent.previousElementSibling;
        prevSibling.querySelector(".select-btn-text").textContent = event.target.textContent;
        parent.parentNode.classList.remove("active")
    }
})
