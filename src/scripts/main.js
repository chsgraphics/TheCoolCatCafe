let nav = document.getElementById("navbar");
let logo = document.getElementById("logo");
let pink = document.getElementById("pink-chunk");
let orange = document.getElementById("orange-chunk");
let ftext = document.getElementById("foot-text");

// responsive nav (NOT animated below 1024px)
let below1024 = window.matchMedia("(max-width: 1024px)");

function responsiveNav(below1024) {
  if (below1024.matches) {
    nav.classList.add("spin-back");
    logo.classList.add("logo-spin-back");
    pink.classList.add("pink-straighten");
    orange.classList.add("orange-straighten");
    ftext.classList.remove("hideMe");
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  if (below1024.matches) {
    return false;
  } else {
    navFunction();
    footFunction();
  }
};


// Get the offset position of the navbar
let tilty = nav.offsetHeight;

console.log(tilty);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFunction() {
  if (window.pageYOffset >= (tilty - 90)) {
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

responsiveNav(below1024);
below1024.addListener(responsiveNav)
