// Get references to HTML elements
var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');

// Add event listener to the add task button
addTaskBtn.addEventListener('click', function() {
  var taskText = taskInput.value;
  
  if (taskText.trim() !== '') {
    // Create new list item
    var li = document.createElement('li');
    li.textContent = taskText;
    
    // Create delete button for the list item
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    
    // Add event listener to the delete button
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
    
    // Append delete button to the list item
    li.appendChild(deleteBtn);
    
    // Append list item to the task list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
  }
});
