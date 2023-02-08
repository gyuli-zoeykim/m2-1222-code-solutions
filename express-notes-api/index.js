const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const arry = [];

app.get('/api/notes', (req, res) => {
  for (const property in data.notes) {
    const value = data.notes[property];
    arry.push(value);
  }
  res.status(200).json(arry);
});

var idArry = [];
function getData() {
  for (const property in data.notes) {
    const idValue = data.notes[property].id;
    idArry.push(idValue);
  }
}

app.get('/api/notes/:id', (req, res) => {
  getData();
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (idArry.includes(Number(req.params.id)) === true) {
    res.status(200).json(data.notes[req.params.id]);
  } else if (idArry.includes(Number(req.params.id)) === false) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const idNumber = data.nextId;
  const newNote = req.body;
  if (newNote.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    newNote.id = idNumber;
    data.notes[idNumber] = newNote;
    data.nextId++;

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  getData();
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (idArry.includes(Number(req.params.id)) === false) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else if (idArry.includes(Number(req.params.id)) === true) {
    delete data.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  getData();
  const reNote = req.body;
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (reNote.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (idArry.includes(Number(req.params.id)) === false) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else if (idArry.includes(Number(req.params.id)) === true) {
    reNote.id = req.params.id;
    data.notes[req.params.id] = reNote;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(req.body);
      }
    });
  }
});

app.listen(3000, () => {
  /* console.log('Listening on port 3000'); */
});
