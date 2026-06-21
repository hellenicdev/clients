(function() {
  'use strict';

  /* ── Language Toggle ── */
  const toggle = document.getElementById('langToggle');
  const html = document.documentElement;

  function setLang(lang) {
    if (lang === 'en') {
      document.body.classList.add('en');
      html.lang = 'en';
    } else {
      document.body.classList.remove('en');
      html.lang = 'el';
    }
    toggle.querySelectorAll('.lang-toggle__el, .lang-toggle__en').forEach(function(el) {
      el.classList.remove('active');
    });
    toggle.querySelector(lang === 'en' ? '.lang-toggle__en' : '.lang-toggle__el').classList.add('active');
    try { localStorage.setItem('thessnostima-lang', lang); } catch(e) {}
  }

  toggle.addEventListener('click', function() {
    setLang(document.body.classList.contains('en') ? 'el' : 'en');
  });

  try {
    if (localStorage.getItem('thessnostima-lang') === 'en') setLang('en');
  } catch(e) {}

  /* ── Mobile Menu Toggle ── */
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.querySelector('.nav');
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav__link').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });

  /* ── Scroll Reveal (Intersection Observer) ── */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function(el) { observer.observe(el); });
  }

  /* ── Animated Counters ── */
  var statNums = document.querySelectorAll('.stat__num[data-target]');
  if (statNums.length) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          if (target > 0) {
            animateCounter(el, target);
          }
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(function(el) { counterObserver.observe(el); });
  }

  function animateCounter(el, target) {
    var current = 0;
    var step = Math.max(1, Math.floor(target / 50));
    var interval = setInterval(function() {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 30);
  }

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq__question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq__item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item.open').forEach(function(i) {
        i.classList.remove('open');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Testimonial Carousel ── */
  var dots = document.querySelectorAll('.testimonial__dot');
  var cards = document.querySelectorAll('.testimonial-card');
  var currentSlide = 0;
  var slideInterval;

  function showSlide(index) {
    cards.forEach(function(c) { c.classList.remove('active'); });
    dots.forEach(function(d) { d.classList.remove('active'); });
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      clearInterval(slideInterval);
      showSlide(parseInt(dot.getAttribute('data-index'), 10));
      startSlideTimer();
    });
  });

  function startSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
      showSlide((currentSlide + 1) % cards.length);
    }, 6000);
  }

  if (cards.length) startSlideTimer();

  /* ── Back to Top ── */
  var backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Lightbox ── */
  var lightboxEl = document.getElementById('lightbox');
  var lightboxImg = lightboxEl.querySelector('.lightbox__img');
  var lightboxClose = lightboxEl.querySelector('.lightbox__close');
  var lightboxPrev = lightboxEl.querySelector('.lightbox__prev');
  var lightboxNext = lightboxEl.querySelector('.lightbox__next');
  var galleryImages = [];
  var currentImgIndex = 0;

  document.querySelectorAll('[data-lightbox]').forEach(function(link, index) {
    galleryImages.push(link.getAttribute('href'));
    link.addEventListener('click', function(e) {
      e.preventDefault();
      currentImgIndex = index;
      openLightbox(galleryImages[currentImgIndex]);
    });
  });

  function openLightbox(src) {
    lightboxImg.setAttribute('src', src);
    lightboxEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prevImage() {
    currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.setAttribute('src', galleryImages[currentImgIndex]);
  }

  function nextImage() {
    currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
    lightboxImg.setAttribute('src', galleryImages[currentImgIndex]);
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevImage);
  lightboxNext.addEventListener('click', nextImage);

  lightboxEl.addEventListener('click', function(e) {
    if (e.target === lightboxEl) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (!lightboxEl.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  /* ── Contact Form ── */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(function() {
      formSuccess.classList.remove('show');
    }, 5000);
  });
})();