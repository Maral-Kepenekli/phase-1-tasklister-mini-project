document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const addForm = document.forms['create-task-form'];
  const toDoTasks = document.getElementById('tasks');

  addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

    // creating Elements
    const li = document.createElement('li');
    const toDo = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // createing Content
    deleteBtn.textContent = " ✖ ";
    deleteBtn.className = "delete-button";
    toDo.textContent = value;

    //appending to parent Node
    li.appendChild(toDo);
    li.appendChild(deleteBtn);
    toDoTasks.appendChild(li);

    // Editing tasks
    toDo.addEventListener('click', function () {
      // replace task element with input field
      const input = document.createElement('input');
      input.type = 'text';
      input.value = toDo.textContent;
      li.replaceChild(input, toDo);
      input.focus();

      // save new value of task when enter key is pressed or input field loses focus
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          toDo.textContent = input.value;
          li.replaceChild(toDo, input);
        }
      });
      input.addEventListener('blur', function () {
        toDo.textContent = input.value;
        li.replaceChild(toDo, input);
      });
    });


  });




  // delete Tasks
  toDoTasks.addEventListener('click', function (e) {
    if (e.target.className == "delete-button") {
      toDoTasks.removeChild(e.target.parentElement);
    };
  });


});
