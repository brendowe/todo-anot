const btnNewNote = document.getElementById("btnNewNote");
const btnNewTask = document.getElementById("btnNewTask");
const contentNotes = document.getElementById("contentNotes");
const newNote = document.getElementById("newNote");
const btnNote = document.getElementById("btnNote");
const btnTask = document.getElementById("btnTask");

const tasks = document.getElementsByClassName("note");
const deleteButtons = document.querySelectorAll(".delTask");
const contentTasks = document.getElementById("contentTasks");
const displayNote = document.getElementById("noteBtn");
const displayTask = document.getElementById("taskBtn");
const btnCancelTask = document.getElementById("btnCancelTask");

const checkTask = document.getElementsByClassName("checkTask");

displayNote.addEventListener("click", function (event) {
  event.preventDefault();
  contentNotes.style.display = "grid";
  btnNewNote.style.display = "block";
  contentTasks.style.display = "none";
  btnNewTask.style.display = "none";
});

displayTask.addEventListener("click", function (event) {
  event.preventDefault();
  contentTasks.style.display = "flex";
  btnNewTask.style.display = "block";
  contentNotes.style.display = "none";
  btnNewNote.style.display = "none";
});

btnNewNote.addEventListener("click", function (event) {
  event.preventDefault();
  openScreen();
});

btnNewTask.addEventListener("click", function (event) {
  event.preventDefault();
  openScreenTask();
});

btnNote.addEventListener("click", criarTarefa);
btnCancelNote.addEventListener("click", cancelarTarefa);

btnTask.addEventListener("click", criarTarefa2);
btnCancelTask.addEventListener("click", cancelarTarefa2);

function openScreen() {
  newNote.style.display = "block";
}

function openScreenTask() {
  newTask.style.display = "block";
}

function criarTarefa() {
  let title = document.getElementById("noteTitle");
  let text = document.getElementById("noteText");
  contentNotes.innerHTML += `
        <div class="note">
        <h2>${title.value}</h2>
          <p>${text.value}</p>
          <button class="delNote">X</button>
        </div>`;
  newNote.style.display = "none";
  title.value = "";
  text.value = "";

  deletarNote();
}

function criarTarefa2() {
  let text = document.getElementById("taskText");
  contentTasks.insertAdjacentHTML ('beforeend',`
        <div class="task">
          <input type="checkbox" class="checkTask">
          <p>${text.value}</p> 
          <button class="delNote">X</button>   
         </div>`);
  newTask.style.display = "none";
  text.value = "";

  check();
  deletarNote();
}

function cancelarTarefa() {
  let title = document.getElementById("noteTitle");
  let text = document.getElementById("noteText");
  newNote.style.display = "none";
  title.value = "";
  text.value = "";
}

function cancelarTarefa2() {
  let text = document.getElementById("taskText");
  newTask.style.display = "none";
  text.value = "";
}

function deletarNote() {
  const deleteButtons = document.querySelectorAll(".delNote");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

deletarNote();

function check() {
  const checkTask = document.querySelectorAll(".checkTask");
  checkTask.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.checked == true) {
        this.nextElementSibling.style.color = "rgb(27, 240, 44)";
        this.nextElementSibling.style.textDecoration = "line-through";
      } else {
        this.nextElementSibling.style.color = "white";
        this.nextElementSibling.style.textDecoration = "none";
      }
    });
  });
}

check();

