const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { tokenizeText, decodeToken } = require('./src/tokenizer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('src'));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/tokenize', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('Text is required');
    }
    const tokens = tokenizeText(text);
    const decodedTokens = tokens.map(token => decodeToken(token));
    const tokenCount = tokens.length;
    res.json({ tokens, decodedTokens, tokenCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});