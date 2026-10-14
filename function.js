/* RENACER — interacciones del sitio */
(function () {
  'use strict';

  const progressBar = document.getElementById('progress-bar');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));

  // Barra superior: indica cuánto de la página se ha recorrido.
  function updateReadingProgress() {
    if (!progressBar) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress);
  updateReadingProgress();

  // Menú adaptable para teléfonos y tabletas.
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
      mainNav.classList.toggle('is-open', !isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }

  // Aparición suave de secciones al entrar en pantalla; si no existe
  // IntersectionObserver, el contenido permanece visible.
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  // Si falta una imagen local, muestra el espacio diseñado con el nombre del archivo.
  document.querySelectorAll('.image-frame').forEach(function (frame) {
    const image = frame.querySelector('img');
    if (!image) return;

    function showPlaceholder() {
      frame.classList.add('image-missing');
      image.setAttribute('aria-hidden', 'true');
    }

    image.addEventListener('error', showPlaceholder);
    if (image.complete && image.naturalWidth === 0) showPlaceholder();
  });

  // Marca en la navegación la sección que ocupa la mayor parte de la pantalla.
  const trackedSections = ['historia', 'linea-de-vida', 'socializacion', 'reflexion']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && trackedSections.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    trackedSections.forEach(function (section) { sectionObserver.observe(section); });
  }
})();
