// Get references to the form, search input, search button, and the task list
const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');
const taskList = document.querySelector('#task-list');

// Load the tasks from local storage if they exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render the tasks in the task list
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.task} - Assigned to: ${task.user}`;
    taskList.appendChild(li);
  });
}

// Add a new task to the task list
function addTask(event) {
  event.preventDefault();

  // Get the task and user values from the form
  const task = document.querySelector('#task').value;
  const user = document.querySelector('#user').value;

  // Add the task to the tasks array
  tasks.push({ task, user });

  // Save the tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Render the updated task list
  renderTasks();

  // Reset the form
  form.reset();
}

// Search for tasks that match the search string
function searchTasks(event) {
  event.preventDefault();

  const searchString = searchInput.value.toLowerCase();

  // Filter the tasks that match the search string
  const filteredTasks = tasks.filter(task => {
    return task.task.toLowerCase().includes(searchString) ||
           task.user.toLowerCase().includes(searchString);
  });

  // Render the filtered task list
  taskList.innerHTML = '';
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.task} - Assigned to: ${task.user}`;
    taskList.appendChild(li);
  });
}

// Add an event listener to the form to add a task when it's submitted
form.addEventListener('submit', addTask);

// Add an event listener to the search button to search for tasks
searchButton.addEventListener('click', searchTasks);

// Render the tasks when the page loads
renderTasks();
