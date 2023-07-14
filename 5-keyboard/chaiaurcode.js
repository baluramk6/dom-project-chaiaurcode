const insert = document.querySelector('#insert');

window.addEventListener('keypress', function (e) {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tbody>
    <tr>
      <td>${e.key === false ? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>
  `;
});
