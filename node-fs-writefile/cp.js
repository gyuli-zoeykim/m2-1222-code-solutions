const fs = require('fs');
fs.readFile('note.txt', 'utf8', (err, data) => {
  if (err) throw err;
  else {
    fs.writeFile('copy-of-note.txt', data, err => {
      if (err) throw err;
    });
  }
});
