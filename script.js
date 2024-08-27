//Getting Elelments
let todo = document.querySelector(".todo");
let doing = document.querySelector(".doing");
let done = document.querySelector(".done");
let lists = document.querySelectorAll(".list");
let selected = null;
let addTask = document.querySelector("#addTask");
let taskInput = document.querySelector("#taskInput");

//Event Listners

const taskAdd = () => {
  let taskInput = document.querySelector("#taskInput");
  let task = taskInput.value.trim();
  if (task) {
    let todoTask = document.createElement("div");
    todoTask.classList.add("list");
    todoTask.setAttribute("draggable", "true");
    todoTask.innerText = task;
    todo.appendChild(todoTask);

    todoTask.addEventListener("dragstart", function (e) {
      selected = e.target;
    });

    taskInput.value = "";
    saveTasks();
  } else {
    alert("no");
  }
};
addTask.addEventListener("click", taskAdd);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    taskAdd();
  }
});

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });

  list.addEventListener("dragend", function (e) {
    selected = null;
  });
}

todo.addEventListener("dragover", function (e) {
  e.preventDefault();
});

todo.addEventListener("drop", function (e) {
  if (selected) {
    todo.appendChild(selected);
    selected = null;
    saveTasks();
  }
});
doing.addEventListener("dragover", function (e) {
  e.preventDefault();
});

doing.addEventListener("drop", function (e) {
  if (selected) {
    doing.appendChild(selected);
    selected = null;
    saveTasks();
  }
});

done.addEventListener("dragover", function (e) {
  e.preventDefault();
});

done.addEventListener("drop", function (e) {
  if (selected) {
    done.appendChild(selected);
    selected = null;
    saveTasks();
  }
});

function saveTasks() {
  const divs = [todo, doing, done];
  divs.forEach((div) => {
    const tasks = Array.from(div.querySelectorAll(":not(h3)")).map(
      (task) => task.textContent
    );
    localStorage.setItem(div.className, JSON.stringify(tasks));
  });
}

function loadTasks() {
  const divs = [todo, doing, done];
  divs.forEach((div) => {
    const tasks = JSON.parse(localStorage.getItem(div.className));
    if (tasks) {
      tasks.forEach((task) => {
        if (task.trim() != "") {
          const taskElement = document.createElement("div");
          taskElement.textContent = task;
          taskElement.classList.add("list");
          taskElement.setAttribute("draggable", "true");
          div.appendChild(taskElement);
        }
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", loadTasks);
