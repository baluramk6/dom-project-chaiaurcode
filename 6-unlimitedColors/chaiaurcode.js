const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const body = document.querySelector('body');

let startTime;

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

startButton.addEventListener('click', function () {
  if (startTime === undefined || startTime === null) {
    startTime = setInterval(function () {
      body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stopButton.addEventListener('click', function () {
  clearInterval(startTime);
  startTime = null;
  body.style.backgroundColor = '#212121';
});
