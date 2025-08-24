// Filename - scripts.js (JavaScript code)

let button = document.getElementById("btn_id2");

button.addEventListener("click", animationjs);

function animationjs() {
  button.classList.add("animationjs");

  setTimeout(function () {
    button.style.background = "#A155B9";
    button.classList.remove("animationjs");
  }, 1500);
}
