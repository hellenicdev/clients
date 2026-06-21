(function () {
  const langToggle = document.getElementById('langToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = modal.querySelector('.modal-close');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const navLinks = document.querySelectorAll('.nav a');
  const catHeaders = document.querySelectorAll('.category-header');
  const reveals = document.querySelectorAll('.reveal');

  let currentLang = 'el';

  function switchLang(lang) {
    currentLang = lang;
    langToggle.textContent = lang === 'el' ? 'EN' : 'EL';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-el][data-en]').forEach(el => {
      el.innerHTML = el.getAttribute('data-' + lang);
    });
  }

  langToggle.addEventListener('click', function () {
    switchLang(currentLang === 'el' ? 'en' : 'el');
  });

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  catHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const isActive = this.classList.contains('active');
      catHeaders.forEach(h => {
        h.classList.remove('active');
        h.setAttribute('aria-expanded', 'false');
        h.nextElementSibling.classList.remove('open');
      });
      if (!isActive) {
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        this.nextElementSibling.classList.add('open');
      }
    });
  });

  catHeaders[0].classList.add('active');
  catHeaders[0].setAttribute('aria-expanded', 'true');
  catHeaders[0].nextElementSibling.classList.add('open');

  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  function updateActiveNav() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();
})();
