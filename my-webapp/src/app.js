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

    const textInput = document.getElementById('textInput');
    const tokenizeButton = document.getElementById('tokenizeButton');
    const resultDiv = document.getElementById('result');

    tokenizeButton.addEventListener('click', async () => {
        const text = textInput.value;
        if (text) {
            const response = await fetch('/tokenize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });
            const data = await response.json();
            resultDiv.textContent = `Tokens: ${data.tokens.join(', ')}`;
        } else {
            resultDiv.textContent = 'Please enter some text.';
        }
    });
});