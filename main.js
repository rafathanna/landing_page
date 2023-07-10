let img = document.querySelector(".main-img");
let container = document.getElementById("container");

// Function to set the image source
if (localStorage.length > 0) {
  img.src = localStorage.src;
}
function iphone(src) {
  img.src = src;
  localStorage.setItem("src", src);
}

if (localStorage.length > 0) {
  container.style.background  = localStorage.color;
}
// Function to set the background color
function colors(color) {
  container.style.background = color;
  localStorage.setItem("color", color);
}
