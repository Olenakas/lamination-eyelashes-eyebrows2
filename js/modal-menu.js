(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuItems = mobileMenu.querySelectorAll('.js-menu-item');
  const body = document.querySelector('body');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    
    if (isMenuOpen) {
      body.style.overflow = ''; // Восстановить прокрутку контента
    } else {
      body.style.overflow = 'hidden'; // Остановить прокрутку контента
    }
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.style.overflow = ''; // Восстановить прокрутку контента
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', closeMenu);
  });

  // Close the mobile menu on wider screens if the device orientation changes
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleScreenChange = e => {
    if (!e.matches) {
      closeMenu();
    }
  };

  mediaQuery.addEventListener('change', handleScreenChange);
})();
