const takeAChance = require('./take-a-chance');

takeAChance('zoey').then(data => {
  const promise = data;
  console.log(data);
}).catch(err => {
  console.error(err.message);
});
