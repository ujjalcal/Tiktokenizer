// filepath: tokenizer.js
const tiktoken = require('tiktoken');

function tokenizeText(text, encodingName = 'cl100k_base') {
    const encoding = tiktoken.get_encoding(encodingName);
    const tokens = encoding.encode(text);
    return Array.isArray(tokens) ? tokens : Object.values(tokens);
}

function decodeToken(token, encodingName = 'cl100k_base') {
    const encoding = tiktoken.get_encoding(encodingName);
    const decodedArray = encoding.decode([token]);
    if (Array.isArray(decodedArray)) {
        return String.fromCharCode(...decodedArray);
    }
    if (typeof decodedArray === 'object') {
        return String.fromCharCode(...Object.values(decodedArray));
    }
    return typeof decodedArray === 'string' ? decodedArray : JSON.stringify(decodedArray);
}

module.exports = { tokenizeText, decodeToken };