const notesContainer = document.querySelector(".container");
const createBtn = document.querySelector(".create-notes");

createBtn.addEventListener("click", () => {
  const inputField = document.createElement("div");
  inputField.classList.add("input-field");

  const inputBox = document.createElement("p");
  inputBox.classList.add("input-text");
  inputBox.setAttribute("contenteditable", "true");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");

  const deleteImg = document.createElement("img");
  deleteImg.src = "Images/delete.png";

  deleteBtn.appendChild(deleteImg);
  inputField.appendChild(inputBox);
  inputField.appendChild(deleteBtn);
  notesContainer.appendChild(inputField);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    var grandparentElement = e.target.parentElement.parentElement;
    if (grandparentElement.classList.contains("input-field")) {
      grandparentElement.remove();
    }
  }
});
