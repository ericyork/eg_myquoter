window.onload = () => {
  const test = document.getElementById('test');
  test.innerHTML = '<p aria-busy="true">JavaScript is loaded</p>';
  test.addEventListener("click", () => {
  test.innerHTML = '';
  })
  }
