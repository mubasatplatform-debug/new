function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.flow-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  const map = { home: 0, booking: 1, admin: 2, customer: 3, workflow: 4 };
  document.querySelectorAll('.flow-btn')[map[name]].classList.add('active');
  window.scrollTo(0, 0);
}

// Car option selection
document.addEventListener('click', e => {
  const opt = e.target.closest('.car-option');
  if (opt) {
    opt.closest('.car-select-grid')?.querySelectorAll('.car-option')
      .forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
  }
});
