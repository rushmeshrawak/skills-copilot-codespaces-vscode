//create web server using express
// Step 1: npm install express
// Step 2: create express server
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// Step 3: run node comments.js
// Step 4: open browser and type http://localhost:3000/

 
