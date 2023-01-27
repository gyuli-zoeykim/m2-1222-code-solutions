const datajson = require('./data.json');
const fs = require('fs');

var arry = [];
for (const property in datajson.notes) {
  var notelist = (`${datajson.notes[property]}`);
  var listall = (`${property}: ${datajson.notes[property]}`);
  arry.push(notelist);
  if (process.argv[2] === 'read') {
    console.log(listall);
  }
}

var idNumber = datajson.nextId;
var obj = {};

for (let i = 1; i < datajson.nextId; i++) {
  obj[i] = arry[i - 1];
}

if (process.argv[2] === 'create') {
  obj[datajson.nextId] = process.argv[3];
  idNumber++;
} else if (process.argv[2] === 'update') {
  obj[process.argv[3]] = process.argv[4];
} else if (process.argv[2] === 'delete') {
  for (let i = process.argv[3]; i < datajson.nextId; i++) {
    obj[i] = arry[i];
  }
  delete obj[datajson.nextId - 1];
  idNumber--;
}

var data = {
  nextId: idNumber,
  notes: obj
};
fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
  if (err) throw err;
});
