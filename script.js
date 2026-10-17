const amount = document.querySelectorAll(".transcation-amount");
const inactive_button = document.querySelectorAll("button");

const send = document.querySelector(".send")
const receive = document.querySelector(".receive")


amount.forEach((amountMoney) => {
  const p = amountMoney.firstElementChild;
  if (amountMoney.firstElementChild.textContent.startsWith("-")) {
    p.style.color = "red";
  } else {
    p.style.color = "lime";
  }
});

inactive_button.forEach((button) => {
  const popup = document.querySelector(".soon");
  const main = document.querySelector(".main")

  button.addEventListener("click", popupWindow);
  function popupWindow() {
    popup.style.display = "block";
    main.style.opacity = "50%"
    setTimeout(() => {
      popup.style.display = "none";
      main.style.opacity = "100%"
    }, 2000);
  }
});
