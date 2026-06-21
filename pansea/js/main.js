(function () {
  'use strict';

  var currentLang = 'en';

  /* LANGUAGE TOGGLE */
  function setLanguage(lang) {
    currentLang = lang;
    var els = document.querySelectorAll('[data-' + lang + ']');
    for (var i = 0; i < els.length; i++) {
      els[i].innerHTML = els[i].getAttribute('data-' + lang);
    }
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = btn.getAttribute('data-' + lang);
    }
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
  }

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLanguage(currentLang === 'en' ? 'el' : 'en');
    });
  }

  /* MOBILE HAMBURGER */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }

  /* SMOOTH SCROLL */
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  for (var i = 0; i < navAnchors.length; i++) {
    navAnchors[i].addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* GALLERY LIGHTBOX WITH NAV */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('img');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var currentImgIndex = 0;
  var gallerySrcs = [];

  for (var i = 0; i < galleryItems.length; i++) {
    (function (idx) {
      galleryItems[idx].addEventListener('click', function () {
        var img = this.querySelector('img');
        if (img) {
          currentImgIndex = idx;
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
          updateCounter();
        }
      });
    })(i);
    var src = galleryItems[i].querySelector('img');
    if (src) gallerySrcs.push(src.src);
  }

  function updateCounter() {
    var counter = document.querySelector('.lightbox-counter');
    if (counter) {
      counter.textContent = (currentImgIndex + 1) + ' / ' + gallerySrcs.length;
    }
  }

  function showImage(index) {
    if (index >= 0 && index < gallerySrcs.length) {
      currentImgIndex = index;
      lightboxImg.src = gallerySrcs[currentImgIndex];
      updateCounter();
    }
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('active');
    }
    if (e.target.classList.contains('lightbox-nav')) {
      e.stopPropagation();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    } else if (e.key === 'ArrowLeft') {
      showImage(currentImgIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentImgIndex + 1);
    }
  });

  var prevBtn = lightbox.querySelector('.lightbox-nav.prev');
  var nextBtn = lightbox.querySelector('.lightbox-nav.next');

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      showImage(currentImgIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      showImage(currentImgIndex + 1);
    });
  }

  /* SCROLL REVEAL */
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* BACK TO TOP */
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* NAVBAR SCROLL */
  var navbar = document.getElementById('navbar');

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(26, 42, 58, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
      navbar.style.background = 'rgba(26, 42, 58, 0.85)';
      navbar.style.boxShadow = 'none';
    }

    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ACTIVE NAV LINK */
  var sections = document.querySelectorAll('section[id]');
  var navLinkItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 150;
    var currentId = '';

    sections.forEach(function (section) {
      var offset = section.offsetTop;
      var height = section.offsetHeight;

      if (scrollPos >= offset && scrollPos < offset + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  /* PARALLAX HERO */
  var hero = document.getElementById('hero');

  window.addEventListener('scroll', function () {
    if (window.scrollY < window.innerHeight) {
      hero.style.backgroundPositionY = window.scrollY * 0.4 + 'px';
    }
  });

  /* COUNTER ANIMATION FOR AMENITIES */
  var amenityItems = document.querySelectorAll('.amenity-item');
  var counted = false;

  function countUp() {
    if (counted) return;
    counted = true;

    var countEls = document.querySelectorAll('.amenity-count');
    countEls.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'));
      var current = 0;
      var increment = Math.ceil(target / 30);
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current;
      }, 40);
    });
  }

  if ('IntersectionObserver' in window && amenityItems.length > 0) {
    var amenityObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp();
        }
      });
    }, { threshold: 0.5 });

    if (amenityItems[0]) amenityObserver.observe(amenityItems[0]);
  }

})();