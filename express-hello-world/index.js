var express = require('express');
var app = express();

app.use(function test(req, res) {
  res.send('test respond');
});

app.listen(3000, () => {
  /* console.log('server listening on port 3000'); */
});
