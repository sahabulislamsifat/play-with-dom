// console.log("Hello my friend....");

let sum = 0;
// Way One
function countPlus() {
  const count = document.getElementById("count");
  sum += 1;
  count.innerText = sum;
}

// Way Two
const minusButton = document.getElementById("btn-minus");

minusButton.addEventListener("click", function () {
  const count = document.getElementById("count");
  sum -= 1;
  count.innerText = sum;
});
