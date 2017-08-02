var express = require('express');
var app = express();

app.get("/", function name(request, response) {
   response.send('OK');
});

module.exports=app;