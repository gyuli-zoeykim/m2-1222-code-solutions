var countdown = document.getElementsByClassName('countdown-display')[0];

var msg = 4;

var countmsg = setInterval(function() {
  msg--;
  countdown.innerHTML = msg;
  if (msg === 0) {
    clearInterval(countmsg);
    countdown.textContent = '~Earth Beeeelooowww Us~'
  }
}, 1000);
