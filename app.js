var express = require('express');
var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });
var app = express();

var cities = { 'Lotopia': 'description 1', 'Caspiana': 'description 2', 'Indigo': 'description 3' };

app.use(express.static('public'));

app.get("/cities", function (request, response) {
    response.json(Object.keys(cities));
});

app.post("/cities", urlencode, function (request, response) {
    var newCity = request.body;
    cities[newCity.name] = newCity.description;
    response.status(201).json(newCity.name);
});
module.exports = app;