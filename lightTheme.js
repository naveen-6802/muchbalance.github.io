document.getElementById('thmBtn').addEventListener('click', function () {
  let light = document.body.classList.toggle('lightTheme');
  localStorage.setItem('light', light);
}); 

if(JSON.parse(localStorage.getItem('light')) === false) {
  document.body.classList.remove('lightTheme');
}