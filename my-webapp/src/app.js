// This file contains the JavaScript code for the web application.
// It handles the application's logic, including event listeners and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '<h1>Welcome to My Web App</h1>';
    
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    appElement.appendChild(button);
    
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});