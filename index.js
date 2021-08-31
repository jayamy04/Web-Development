// Text Animation

var typed = new Typed(".typing", {
  strings: ["UX Designer", "Front-end Developer", "Cognitive Science Major"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Cursor

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-link, .navbar-brand, .button");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
});
});
