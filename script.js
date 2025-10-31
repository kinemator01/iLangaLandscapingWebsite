// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-menu ul');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
