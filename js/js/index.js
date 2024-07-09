///////////////////////////
//   Elements
//////////////////////////
const toggle1 = document.getElementById("toggle");
const nav = document.querySelector("nav");
const close_nav = document.querySelector(".close-nav");
const collapsibel = document.querySelector(".collapsible");
const open = document.getElementById("open");
const open1 = document.getElementById("open1");
const modal = document.getElementById("modal");
const close_signup = document.getElementById("signup-loginbtn-close");
const open3btn = document.getElementById("open2");
const open2btn = document.getElementById("open3");
const buyimg = document.getElementById("buyimg"); // buybtn and img both
const rentimg = document.getElementById("rentimg-btn-nav");
const mortgageimg = document.getElementById("mortgageimg");
const localimg = document.getElementById("localimg");
const additionalimg = document.getElementById("additional-img");
////////////////
// function
///////////////

////////////
toggle1.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  // document.nav.display = "block";
});
close_nav.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

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
buyimg.addEventListener("click", (e) => {
  e.preventDefault();
  const col = document.querySelector(".buy-ul");
  console.log(col);
  col.style.display = col.style.display === "block" ? "none" : "block";
});

rentimg.addEventListener("click", function (e) {
  const ullist = document.querySelector(".rent-ul");
  console.log(ullist);
  ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});
mortgageimg.addEventListener("click", () => {
  const ullist = document.querySelector(".mortgage-ul");
  ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});
localimg.addEventListener("click", () => {
  const ullist = document.querySelector(".local-ul");
  ullist.style.display = ullist.style.display === "block" ? "none" : "block";
});

additionalimg.addEventListener("click", () => {
  const list = document.querySelector(".additional-ul");
  list.style.display = list.style.display === "block" ? "none" : "block";
});
