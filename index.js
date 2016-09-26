var express = require('express');
var app = express();

var api = require('./dummy-api.js');

app.get('/api/dummy', api.list);
app.get('/api/dummy/:id', api.get);
app.delete('/api/dummy/:id', api.delete);
app.put('/api/dummy/:id', api.update);
app.post('/api/dummy', api.add);

app.listen(3000);
