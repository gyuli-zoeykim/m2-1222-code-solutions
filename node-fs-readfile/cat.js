const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    var arry = [];
    arry.unshift(data);
    return console.log(arry.join());
  });
}
