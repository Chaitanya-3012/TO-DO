//Getting Elelments
let todo = document.querySelector(".todo");
let doing = document.querySelector(".doing");
let done = document.querySelector(".done");
let lists = document.querySelectorAll(".list");
let selected = null;
let addTask = document.querySelector("#addTask");

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
  } else {
    alert("no");
  }
};
addTask.addEventListener("click", taskAdd);

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
  }
});
doing.addEventListener("dragover", function (e) {
  e.preventDefault();
});

doing.addEventListener("drop", function (e) {
  if (selected) {
    doing.appendChild(selected);
    selected = null;
  }
});

done.addEventListener("dragover", function (e) {
  e.preventDefault();
});

done.addEventListener("drop", function (e) {
  if (selected) {
    done.appendChild(selected);
    selected = null;
  }
});
todo.addEventListener("touchstart", function (e) {
  let touch = e.touches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  // Set the initial touch point
  selected.style.top = `${y}px`;
  selected.style.left = `${x}px`;
});
doing.addEventListener("touchstart", function (e) {
  let touch = e.touches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  // Set the initial touch point
  selected.style.top = `${y}px`;
  selected.style.left = `${x}px`;
});
done.addEventListener("touchstart", function (e) {
  let touch = e.touches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  // Set the initial touch point
  selected.style.top = `${y}px`;
  selected.style.left = `${x}px`;
});
todo.addEventListener("touchmove", function (e) {
  if (selected) {
    let touch = e.touches[0];
    let x = touch.clientX;
    let y = touch.clientY;
    selected.style.top = `${y}px`;
    selected.style.left = `${x}px`;
  }
});

doing.addEventListener("touchmove", function (e) {
  if (selected) {
    let touch = e.touches[0];
    let x = touch.clientX;
    let y = touch.clientY;
    selected.style.top = `${y}px`;
    selected.style.left = `${x}px`;
  }
});

done.addEventListener("touchmove", function (e) {
  if (selected) {
    let touch = e.touches[0];
    let x = touch.clientX;
    let y = touch.clientY;
    selected.style.top = `${y}px`;
    selected.style.left = `${x}px`;
  }
});
todo.addEventListener("touchend", function (e) {
  if (selected) {
    todo.appendChild(selected);
    selected = null;
  }
});

doing.addEventListener("touchend", function (e) {
  if (selected) {
    doing.appendChild(selected);
    selected = null;
  }
});

done.addEventListener("touchend", function (e) {
  if (selected) {
    done.appendChild(selected);
    selected = null;
  }
});

todo.addEventListener("touchend", function (e) {
  let touch = e.changedTouches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  let rect = todo.getBoundingClientRect();
  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    todo.appendChild(selected);
    selected = null;
  }
});

doing.addEventListener("touchend", function (e) {
  let touch = e.changedTouches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  let rect = todo.getBoundingClientRect();
  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    todo.appendChild(selected);
    selected = null;
  }
});

done.addEventListener("touchend", function (e) {
  let touch = e.changedTouches[0];
  let x = touch.clientX;
  let y = touch.clientY;
  let rect = todo.getBoundingClientRect();
  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    todo.appendChild(selected);
    selected = null;
  }
});
