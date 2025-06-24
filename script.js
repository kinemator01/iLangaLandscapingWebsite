 const toggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav-menu ul');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });