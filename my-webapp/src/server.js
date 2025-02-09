// filepath: server.js
const express = require('express');
const bodyParser = require('body-parser');
const { tokenize_text } = require('./tokenizer'); // Assuming tokenizer.js contains the tokenize_text function

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('src'));

app.post('/tokenize', (req, res) => {
    const { text } = req.body;
    const tokens = tokenize_text(text);
    res.json({ tokens });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});