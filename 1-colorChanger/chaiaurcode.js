const boxes = document.querySelectorAll('.button');
const body = document.querySelector('body');

boxes.forEach(function (box) {
  box.addEventListener('click', function (e) {
    body.style.backgroundColor = `${e.target.id}`;
  });
});
