document.getElementById("submit-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("text-area").value;

  const container = document.getElementById("review");

  const paragraph = document.createElement("li");
  paragraph.innerText = inputValue;
  container.appendChild(paragraph);
  document.getElementById("text-area").value = "";
});
