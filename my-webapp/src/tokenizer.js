// filepath: tokenizer.js
const tiktoken = require('tiktoken');

function tokenize_text(text, encoding_name = 'cl100k_base') {
    const encoding = tiktoken.get_encoding(encoding_name);
    return encoding.encode(text);
}

module.exports = { tokenize_text };