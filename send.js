const back = document.querySelector(".back");
const input = document.querySelector("input")

back.addEventListener("click", prevPage);
function prevPage() {
  console.log(window.history.back());
}

input.addEventListener("focus", () => {
  console.log(input.value,input.click())
})

if (input.value === 10){
  console.log("Agree")
}else{
  console.log("nope", localStorage.getItem("balance"))
}
