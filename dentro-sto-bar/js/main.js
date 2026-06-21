(function () {
  var currentLang = 'el';
  var langPrefKey = 'dentro_lang';

  var els = {
    langToggle: document.getElementById('langToggle'),
    hamburger: document.getElementById('hamburger'),
    nav: document.getElementById('nav'),
    header: document.getElementById('header'),
    html: document.documentElement,
    backToTop: document.getElementById('backToTop'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxClose: document.getElementById('lightboxClose')
  };

  var translations = {};
  var translatableEls = [];

  function initTranslations() {
    var els_ = document.querySelectorAll('[data-gr][data-en]');
    translatableEls = [];
    translations = {};
    els_.forEach(function (el, i) {
      var key = '__t' + i;
      el.setAttribute('data-tkey', key);
      translations[key] = {
        el: el.getAttribute('data-gr'),
        en: el.getAttribute('data-en')
      };
      translatableEls.push(el);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    translatableEls.forEach(function (el) {
      var key = el.getAttribute('data-tkey');
      if (key && translations[key]) {
        el.textContent = translations[key][lang];
      }
    });
    var btnText = els.langToggle.querySelector('.lang-toggle__current');
    if (btnText) btnText.textContent = lang.toUpperCase();
    els.langToggle.classList.toggle('active', lang === 'en');
    els.html.lang = lang === 'el' ? 'el' : 'en';
    try { localStorage.setItem(langPrefKey, lang); } catch (e) {}
    document.title = lang === 'el'
      ? 'Δέντρο στο μπαρ | Dentro sto Bar'
      : 'Dentro sto Bar | Δέντρο στο μπαρ';
  }

  function toggleLanguage() {
    var next = currentLang === 'el' ? 'en' : 'el';
    setLanguage(next);
  }

  function scrollToSection(id) {
    var target = document.getElementById(id);
    if (target) {
      var top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  /* --- SCROLL REVEAL --- */
  function initScrollReveal() {
    var revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* --- ACTIVE NAV --- */
  function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.header__nav a');
    if (!sections.length || !navLinks.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('nav--active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('nav--active');
            }
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* --- BACK TO TOP --- */
  function initBackToTop() {
    if (!els.backToTop) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          els.backToTop.classList.toggle('visible', window.pageYOffset > 500);
          ticking = false;
        });
        ticking = true;
      }
    });
    els.backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- LIGHTBOX --- */
  function initLightbox() {
    var galleryImages = document.querySelectorAll('.gallery__item img, .about__subgallery img');
    if (!els.lightbox) return;
    galleryImages.forEach(function (img) {
      img.addEventListener('click', function () {
        els.lightboxImg.src = img.src;
        els.lightboxImg.alt = img.alt;
        els.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLightbox() {
      els.lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    els.lightboxClose.addEventListener('click', closeLightbox);
    els.lightbox.addEventListener('click', function (e) {
      if (e.target === els.lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && els.lightbox.classList.contains('active')) closeLightbox();
    });
  }

  /* --- INIT --- */
  initTranslations();

  var savedLang;
  try { savedLang = localStorage.getItem(langPrefKey); } catch (e) {}
  if (savedLang === 'en') setLanguage('en');

  els.langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleLanguage();
  });

  els.hamburger.addEventListener('click', function () {
    els.hamburger.classList.toggle('active');
    els.nav.classList.toggle('active');
  });

  els.nav.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link && link.getAttribute('href').charAt(0) === '#') {
      e.preventDefault();
      els.hamburger.classList.remove('active');
      els.nav.classList.remove('active');
      scrollToSection(link.getAttribute('href').slice(1));
    }
  });

  document.addEventListener('click', function (e) {
    if (els.nav.classList.contains('active') && !els.header.contains(e.target)) {
      els.hamburger.classList.remove('active');
      els.nav.classList.remove('active');
    }
  });

  var heroBtn = document.querySelector('.hero__actions .btn--primary');
  if (heroBtn) {
    heroBtn.addEventListener('click', function (e) {
      e.preventDefault();
      scrollToSection('about');
    });
  }

  initScrollReveal();
  initActiveNav();
  initBackToTop();
  initLightbox();
})();
