const back = document.querySelector(".back");
const input = document.querySelector("input");
const keypadButton = document.querySelectorAll(".keyboard");

back.addEventListener("click", prevPage);
function prevPage() {
  console.log(window.history.back());
}

// input.addEventListener("focus", () => {
//   console.log(input.value, input.click());
// });

// if (input.value === 10) {
//   console.log("Agree");
// } else {
//   //console.log("nope", localStorage.getItem("balance"));
// }

keypadButton.forEach((digits) => {
  for (let index = 0; index < digits.children.length; index++) {
    const element = digits.children[index];
    element.addEventListener("click", () => {
      // input.addEventListener("input", ()=>{
      //   console.log(input.value)
      // })
     
      // console.log(input.value, input.innerText);

      input.append(
       (input.value = input.value.concat(element.textContent))
      );
      // input.app;
      digits.children[9].addEventListener("click", ()=>{
          const apple = input.value.slice(0, -1)
          input.value = 22
        console.log(digits.children[9])
      console.log(input.value, apple)
      });
    });
  }
  
});


