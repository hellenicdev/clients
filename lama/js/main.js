(function () {
  var currentLang = 'el';

  var langToggle = document.getElementById('langToggle');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var nav = document.getElementById('nav');
  var hero = document.querySelector('.hero');
  var heroBg = document.getElementById('heroBg');
  var floatBtn = document.getElementById('floatBtn');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');
  var lightboxCounter = document.getElementById('lightboxCounter');
  /* ---- HERO AUTO CYCLE ---- */
  var heroImages = [
    'images/gallery-2.jpg',
    'images/gallery-1.jpg',
    'images/gallery-5.jpg',
    'images/gallery-3.webp',
    'images/gallery-4.webp'
  ];
  var heroIdx = 0;
  var heroTimer = null;

  function showHero(i) {
    heroIdx = (i + heroImages.length) % heroImages.length;
    heroBg.classList.add('fade');
    setTimeout(function () {
      heroBg.style.backgroundImage = 'url(' + heroImages[heroIdx] + ')';
      heroBg.classList.remove('fade');
    }, 400);
  }

  function resetHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(function () { showHero(heroIdx + 1); }, 5000);
  }

  resetHeroTimer();

  /* ---- LANGUAGE TOGGLE ---- */
  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
    document.documentElement.setAttribute('data-lang', lang);
    langToggle.textContent = lang === 'el' ? 'EN' : 'GR';

    var attr = lang === 'el' ? 'data-gr' : 'data-en';
    document.querySelectorAll('[data-gr][data-en]').forEach(function (el) {
      el.textContent = el.getAttribute(attr);
    });

    localStorage.setItem('lama-lang', lang);
  }

  langToggle.addEventListener('click', function () {
    setLang(currentLang === 'el' ? 'en' : 'el');
  });

  var savedLang = localStorage.getItem('lama-lang');
  if (savedLang && (savedLang === 'el' || savedLang === 'en')) {
    setLang(savedLang);
  }

  /* ---- MOBILE NAV ---- */
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  /* ---- SCROLL: NAV SHADOW, ACTIVE LINK, FLOAT BTN, PARALLAX ---- */
  var sections = document.querySelectorAll('.section');
  var navAnchors = navLinks.querySelectorAll('a');

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    var h = window.innerHeight;

    /* nav shadow */
    if (y > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    /* active nav link */
    var current = '';
    sections.forEach(function (s) {
      var top = s.offsetTop - 120;
      var bottom = top + s.offsetHeight;
      if (y >= top && y < bottom) {
        current = s.getAttribute('id');
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    /* float button */
    floatBtn.classList.toggle('visible', y > h * 0.6);

    /* hero parallax */
    if (y <= h) {
      heroBg.style.setProperty('--parallax-y', (y * 0.3) + 'px');
    }
  });

  /* ---- GALLERY LIGHTBOX ---- */
  var galleryImgs = [];
  document.querySelectorAll('.gallery-item img').forEach(function (img) {
    galleryImgs.push({ src: img.getAttribute('src'), alt: img.getAttribute('alt') });
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      openLightbox(galleryImgs.indexOf(this));
    });
  });

  var lightboxIndex = 0;

  function openLightbox(i) {
    lightboxIndex = i;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    var item = galleryImgs[lightboxIndex];
    lightboxImg.setAttribute('src', item.src);
    lightboxImg.setAttribute('alt', item.alt);
    lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + galleryImgs.length;
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prevLightbox() {
    lightboxIndex = (lightboxIndex - 1 + galleryImgs.length) % galleryImgs.length;
    updateLightbox();
  }

  function nextLightbox() {
    lightboxIndex = (lightboxIndex + 1) % galleryImgs.length;
    updateLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevLightbox);
  lightboxNext.addEventListener('click', nextLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });

  /* ---- SCROLL REVEAL ---- */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, .menu-card, .gallery-item, .contact-card').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* ---- HERO LOAD ANIMATION ---- */
  setTimeout(function () {
    hero.classList.add('loaded');
  }, 100);
})();
