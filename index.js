var express = require('express');
var app = express();

var api = require('./dummy-api.js');

app.get('/api/people', api.list);
app.get('/api/people/:id', api.get);
app.delete('/api/people/:id', api.delete);
app.put('/api/people/:id', api.update);
app.post('/api/people', api.add);

app.listen(3000);
