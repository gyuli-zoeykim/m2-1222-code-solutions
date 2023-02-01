var express = require('express');
var app = express();
var grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  var arry = [];
  for (const property in grades) {
    var value = grades[property];
    arry.push(value);
  }
  res.json(arry);
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(3000, () => {
  /* console.log('Listening on port 3000'); */
});
