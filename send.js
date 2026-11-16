const back = document.querySelector(".back");
const input = document.querySelector("input");
const keypadButton = document.querySelectorAll("button");

// BACK BUTTON
back.addEventListener("click", prevPage);
function prevPage() {
  console.log(window.history.back());
}

keypadButton.forEach((digits) => {
  digits.addEventListener("click", () => {
    if (
      digits.className === "back" ||
      digits.className === "support" ||
      digits.textContent === "Change"
    ) {
      digits.removeEventListener("click", () => {});
    } else {
      if (digits.textContent === "x") {
        const app = input.value.slice(0, -1);
        input.value = app;
      } else {
        input.append((input.value = input.value.concat(digits.textContent)));
      }
    }
  });
  // for (let index = 0; index < digits.children.length; index++) {
  //   const element = digits.children[index];
  //   element.addEventListener("click", () => {
  //     // input.addEventListener("input", ()=>{
  //     //   console.log(input.value)
  //     // })

  //     // console.log(input.value, input.innerText);

  //     input.append(
  //      (input.value = input.value.concat(element.textContent))
  //     );
  //     // input.app;
  //     digits.children[9].addEventListener("click", ()=>{
  //         const apple = input.value.slice(0, -1)
  //         input.value = 22
  //       console.log(digits.children[9])
  //     console.log(input.value, apple)
  //     });
  //   });
  // }
});
