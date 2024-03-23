import "./webPage.css"

// Accessing the input elements
const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');

// Function to handle title input change
function handleTitleChange(event) {
  const title = event.target.value;
  console.log('Title:', title);
}

// Function to handle notes input change
function handleNotesChange(event) {
  const notes = event.target.value;
  console.log('Notes:', notes);
}

// Adding event listeners to input elements
titleInput.addEventListener('input', handleTitleChange);
notesInput.addEventListener('input', handleNotesChange);