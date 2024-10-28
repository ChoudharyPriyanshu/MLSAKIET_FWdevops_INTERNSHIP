document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      
      const li = document.createElement("li");
      li.className = "taskItem";
      
      const span = document.createElement("span");
      span.textContent = taskText;
      
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.textContent = "Delete";
      
      deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
      });
      
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      
      taskInput.value = ""; 
    }
  });
  