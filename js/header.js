const header = document.getElementById('main-header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add('hidden'); // Додаємо клас, щоб зникнути
  } else {
    header.classList.remove('hidden'); // Видаляємо клас, щоб з'явитися
  }

  lastScrollPosition = currentScrollPosition;
});
