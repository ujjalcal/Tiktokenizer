// filepath: tokenizer.js
const tiktoken = require('tiktoken');

function tokenizeText(text, encoding_name = 'cl100k_base') {
    const encoding = tiktoken.get_encoding(encoding_name);
    const tokens = encoding.encode(text);
    return Array.isArray(tokens) ? tokens : Object.values(tokens);
}

module.exports = { tokenizeText };