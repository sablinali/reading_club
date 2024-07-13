"use strict";
document.getElementById("explore").onclick = function () {
  window.open("carousel.html", "_blank");
};

function redirectToPage(url) {
  window.open(url, "_blank");
}

// function borrowFunction() {
//   return alert(
//     "Great! This book is available and you can borrow it for 30 days 💖 Happy reading! 🌷"
//   );
// }

function borrowFunction() {
  let popup = document.getElementById("borrow-popup");
  popup.classList.toggle("show");
}

function cancelBorrow() {
  let popup = document.getElementById("borrow-popup");
  popup.classList.remove("show");
}

function confirmBorrow() {
  alert("You have successfully borrowed the book! 🥰 Happy reading! 🌷");
  var popup = document.getElementById("borrow-popup");
  popup.classList.remove("show");
  document.getElementById("borrow-button").innerHTML = "Borrowed";
  document.getElementById("borrow-button").className = "borrow-button-yellow";
}
