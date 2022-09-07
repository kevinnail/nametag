// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const nameInput = document.getElementById('name-input');

const displayName = document.getElementById('display-name');
const button = document.getElementById('button');
button.addEventListener('click', () => {
    displayName.textContent = nameInput.value;
});
