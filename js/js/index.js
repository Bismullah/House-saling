// alert("working");

const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");
const close_nav = document.querySelector(".close-nav");
const collapsibel = document.querySelector(".collapsible");
const open = document.getElementById("open");
const open1 = document.getElementById("open1");
const modal = document.getElementById("modal");
const close_signup = document.getElementById("signup-loginbtn-close");
const open3btn = document.getElementById("open2");
const open2btn = document.getElementById("open3");
const input = document.querySelectorAll("input[type='button']");
////////////////
// function
///////////////

////////////
toggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  // document.nav.display = "block";
});
close_nav.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

// collapsibel.addEventListener("click", () => {
//   this.classList.remove("show-nav-contents");
//   const contents = this.nextElementSibling;
//   if (contents.style.display === "block") {
//     contents.style.display = "none";
//   } else {
//     contents.style.display = "block";
//   }
// });

open3btn.addEventListener("click", () => modal.classList.add("show-modal"));
open2btn.addEventListener("click", () => modal.classList.add("show-modal"));
open1.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
close_signup.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
