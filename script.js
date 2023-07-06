const notesContainer = document.querySelector(".container");
let notes = document.querySelectorAll(".input-text");

showNotes();

function showNotes() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notesContainer.innerHTML = storedNotes;
  } else {
    return notesContainer.innerHTML;
  }
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    var grandparentElement = e.target.parentElement.parentElement;
    if (grandparentElement.classList.contains("input-field")) {
      grandparentElement.remove();
      updateStorage();
    } else return;
  } else if (e.target.classList.contains("input-text")) {
    notes = document.querySelectorAll(".input-text");
    notes.forEach((item) => {
      item.onkeyup = function () {
        if (item.value == "") {
          item.remove();
        }
        updateStorage();
      };
    });
  }

  if (e.target.classList.contains("create-notes")) {
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
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
