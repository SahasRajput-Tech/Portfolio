// JavaScript code for adding interactivity

document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById("toggleMenu");
    const menu = document.getElementById("menu");
  
    // Toggle menu visibility on button click
    toggleMenu.addEventListener("click", function() {
      menu.classList.toggle("hidden");
    });
  
    // Smooth scroll to section on menu item click
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  