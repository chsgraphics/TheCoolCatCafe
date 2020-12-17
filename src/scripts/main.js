let nav = document.getElementById("navbar");
let logo = document.getElementById("logo");
let pink = document.getElementById("pink-chunk");
let orange = document.getElementById("orange-chunk");
let ftext = document.getElementById("foot-text");


// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  navFunction();
  footFunction();
};


// Get the offset position of the navbar
let tilty = nav.offsetHeight;

console.log(tilty)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFunction() {
  if (window.pageYOffset >= tilty) {
    nav.classList.add("spin-back");
    logo.classList.add("logo-spin-back");
  } else {
    nav.classList.remove("spin-back");
    logo.classList.remove("logo-spin-back");
  }
};

function footFunction() {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight + 300) {
    pink.classList.add("pink-straighten");
    orange.classList.add("orange-straighten");
    ftext.classList.remove("hideMe");
  } else {
    pink.classList.remove("pink-straighten");
    orange.classList.remove("orange-straighten");
    ftext.classList.add("hideMe");
  }
};
