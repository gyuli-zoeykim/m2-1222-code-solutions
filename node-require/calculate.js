const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log('return:', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log('return:', subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'time') {
  console.log('return:', multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log('return:', divide(Number(process.argv[2]), Number(process.argv[4])));
}
