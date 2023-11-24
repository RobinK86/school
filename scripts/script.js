/*  
Author: Robin Kelley
File Name: script.js
Date: 11/14/2023
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
