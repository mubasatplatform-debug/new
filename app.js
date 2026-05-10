// Chart tab switching
document.querySelectorAll('.chart-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('chart-tab--active'));
    tab.classList.add('chart-tab--active');
  });
});

// Nav item switching
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('nav-item--active'));
    item.classList.add('nav-item--active');
  });
});
