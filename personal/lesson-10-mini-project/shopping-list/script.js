const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", addItem);

function addItem() {
  const name = itemInput.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = name;
  span.style.cursor = "pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("text-decoration-line-through");
  });

  const button = document.createElement("button");
  button.textContent = "x";
  button.className = "btn btn-sm btn-outline-danger";
  button.addEventListener("click", () => {
    itemList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
  itemInput.focus();
}
