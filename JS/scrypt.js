function toggleMenu() {
  var menu = document.querySelector(".nav-Menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
function slideBox() {
  var Box = document.querySelector(".interactiveBox");
  if (Box.style.display === "none" || Box.style.display === "") {
    Box.style.display = "block";
  } else {
    Box.style.display = "none";
  }
}
