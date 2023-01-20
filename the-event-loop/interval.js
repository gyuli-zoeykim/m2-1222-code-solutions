var count = 3;
var interval = setInterval(function () {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
}
, 1000);
