var hello = document.getElementsByClassName('message')[0];
console.log('test', hello);

function hellomsg() {
  hello.textContent = 'Hello There';
}

setTimeout(hellomsg, 2000);
