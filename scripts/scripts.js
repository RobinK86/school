/*
    Student Name: Robin Kelley
    File Name: scripts.js
    Date: 11/24/2023

*/

// Hamburger menu function
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);
hamburger.addEventListener("scroll", hamburgercolor);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menuItem");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


function typed() {
var typed = new Typed('.auto-type', {
    strings: ["Computer Teacher...", "Software developer...", "Data Scientist..."],
    typeSpeed: 50,
    backspeed: 150,
    loop: true
  })
}

const btnPrint = document.querySelector(".btnPrint");
function print() {
    btnPrint.addEventListener("click", () => window.print())

}

