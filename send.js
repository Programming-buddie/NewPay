const back = document.querySelector(".back");
const input = document.querySelector("input");
const keypadButton = document.querySelector(".keyboard");
const confirmDiv = document.querySelector(".confirmContainer");

// BACK BUTTON
back.addEventListener("click", prevPage);
function prevPage() {
  console.log(window.history.back());
}

// keypadButton.forEach((digits) => {
//   digits.addEventListener("click", () => {
//     if (
//       digits.className === "back" ||
//       digits.className === "support" ||
//       digits.textContent === "Change"
//     ) {
//       digits.removeEventListener("click", () => {});
//     } else {
//       if (digits.textContent === "x") {
//         const app = input.value.slice(0, -1);
//         input.value = app;
//       } else {
//         input.append((input.value = input.value.concat(digits.textContent)));
//       }
//     }
//   });
//   // for (let index = 0; index < digits.children.length; index++) {
//   //   const element = digits.children[index];
//   //   element.addEventListener("click", () => {
//   //     // input.addEventListener("input", ()=>{
//   //     //   console.log(input.value)
//   //     // })

//   //     // console.log(input.value, input.innerText);

//   //     input.append(
//   //      (input.value = input.value.concat(element.textContent))
//   //     );
//   //     // input.app;
//   //     digits.children[9].addEventListener("click", ()=>{
//   //         const apple = input.value.slice(0, -1)
//   //         input.value = 22
//   //       console.log(digits.children[9])
//   //     console.log(input.value, apple)
//   //     });
//   //   });
//   // }
// });

const numButton = keypadButton.children;
for (let index = 0; index < numButton.length; index++) {
  const element = numButton[index];

  // All number button eventlistner
  element.addEventListener("click", () => {
    // Cancel Button
    if (element.textContent === "x") {
      const backspace = input.value.slice(0, -1);
      input.value = backspace;
    }
    // Done button
    else if (element.textContent === "Done") {

      // Show the confirm Page
      confirmDiv.style.display = "flex";

      // Checking for empty input
      if (input.value === "") {

        // Change the Text and hide the display of payment-info
        confirmDiv.children[0].textContent = "Please enter an amount";
        document.querySelector(".payment-amount-info").style.display = "none"
        document.querySelector(".send-to-info").style.display = "none"

      } 
      else{

        // Show the display of payment-info and adding naira sign to it
        confirmDiv.children[0].textContent = "Confirm this Payment";
        document.querySelector(".payment-amount-info").style.display = "flex"
        document.querySelector(".send-to-info").style.display = "flex"
        document.querySelector(".payment-amount-info").children[1].textContent = `₦`+input.value

        // The continue button
         document
          .querySelector(".next-process")
          .children[0].addEventListener("click", ()=>{
            console.log("You sent "+`₦`+input.value+" to "+document.querySelector(".name").textContent)
            
          })
      }

      // The cancel button to remove the confirm screen wen you click done
      document
          .querySelector(".next-process")
          .children[1].addEventListener("click", () => {
            confirmDiv.style.display = "none";
          }); 

      // Linking the Send-to name to the confirm name
        document.querySelector(".send-to-info").children[1].textContent =
        document.querySelector(".name").textContent;
      
    }
    else {
        // Add the number to the input
        input.append((input.value = input.value.concat(element.textContent)));
      }
  });
}
