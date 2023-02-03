var express = require('express');
var app = express();
var nextId = 1;
var grades = {};

app.get('/api/grades', (req, res) => {
  var arry = [];
  for (const property in grades) {
    var value = grades[property];
    arry.push(value);
  }
  res.json(arry);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId++;
  grades[nextId] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  /* console.log('Listening on port 3000'); */
});
