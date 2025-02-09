const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('src'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/tokenize', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('Text is required');
    }
    // Tokenization logic here
    res.send(`Tokenized text: ${text}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});