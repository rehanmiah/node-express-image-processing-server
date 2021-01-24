const express = require('express');
const path = require('path');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
});



inex.html;
const path.resolve() 
module.exports = app;
