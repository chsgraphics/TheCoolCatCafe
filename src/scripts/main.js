let nav = document.getElementById("navbar");

let logo = document.getElementById("logo");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the offset position of the navbar
let tilty = nav.offsetHeight;

console.log(tilty)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= tilty) {
    nav.classList.add("spin-back");
    logo.classList.add("logo-spin-back");
  } else {
    nav.classList.remove("spin-back");
    logo.classList.remove("logo-spin-back");
  }
}
