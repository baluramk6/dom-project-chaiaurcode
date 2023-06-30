const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Enter valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      const span = document.createElement('span');
      span.textContent = ' Under Weight';
      result.appendChild(span);
    } else if (bmi > 18.6 && bmi < 24.9) {
      const span = document.createElement('span');
      span.textContent = ' Noramal Range';
      result.appendChild(span);
    } else if (bmi > 24.9) {
      const span = document.createElement('span');
      span.textContent = ' Over Weight';
      result.appendChild(span);
    }
  }
});
