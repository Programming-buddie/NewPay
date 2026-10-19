const back = document.querySelector(".back");
const inactive_button = document.querySelectorAll(".div-nav button, .other button");

back.addEventListener("click", prevPage);
function prevPage() {
  console.log(window.history.back());
}

