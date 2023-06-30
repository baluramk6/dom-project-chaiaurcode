const clock = document.querySelector('#clock');

setInterval(function () {
  const time = new Date().toLocaleTimeString();
  clock.textContent = time;
}, 1000);
