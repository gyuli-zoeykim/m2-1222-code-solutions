var hello = document.getElementsByClassName('message')[0];

function hellomsg() {
  hello.textContent = 'Hello There';
}

setTimeout(hellomsg, 2000);
