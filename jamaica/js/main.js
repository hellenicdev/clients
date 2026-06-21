(function () {
  const LANG_KEY = 'jamaica_lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'el';

  const translations = {
    el: {
      'nav.home': 'Αρχική',
      'nav.about': 'Σχετικά',
      'nav.menu': 'Μενού',
      'nav.gallery': 'Φωτογραφίες',
      'nav.contact': 'Επικοινωνία',
      'hero.title': 'Jamaica Ντισκοκαφενείο',
      'hero.tagline': 'Το νέο σου στέκι στην πόλη!',
      'hero.sub': 'Breakfast  •  Brunch  •  Café  •  Disco',
      'hero.cta': 'Βρες μας',
      'about.title': 'Σχετικά',
      'about.p1': 'Το Jamaica είναι το νέο στέκι της Θεσσαλονίκης — ένας ζεστός χώρος συνάντησης που συνδυάζει χαλαρές στιγμές στον καφέ, δημιουργικά brunch και ανεπανάληπτα live βράδια.',
      'about.p2': 'Στη Λεωφόρο Βασιλέως Γεωργίου 44, σε περιμένουμε κάθε μέρα από τις 09:00 το πρωί έως τις 05:00 τα ξημερώματα. Εδώ η μέρα ξεκινά με άρωμα καφέ και τελειώνει με μουσική και παρέα.',
      'about.hours': 'Ώρες Λειτουργίας',
      'about.hours.daily': 'Καθημερινά: 09:00 – 05:00',
      'about.findus': 'Βρες μας',
      'menu.title': 'Μενού',
      'menu.intro': 'Από τον πρωινό καφέ μέχρι τα cocktails της νύχτας — κάθε γεύση έχει τη θέση της στο Jamaica.',
      'menu.coffee': 'Καφές',
      'menu.coffee.desc': 'Espresso, cappuccino, freddo, specialty coffee & περισσότερα.',
      'menu.brunch': 'Brunch',
      'menu.brunch.desc': 'Πλούσια brunch με φρέσκα υλικά κάθε μέρα.',
      'menu.cocktails': 'Cocktails',
      'menu.cocktails.desc': 'Δροσερά cocktails, ποτά & επιλεγμένα κρασιά.',
      'menu.events': 'Live Events',
      'menu.events.desc': 'Μουσικές βραδιές, parties και απρόβλεπτες εκπλήξεις.',
      'menu.note': 'Ακολούθησέ μας στο Instagram για το πλήρες μενού & τις προτάσεις ημέρας!',
      'gallery.title': 'Φωτογραφίες',
      'nav.faq': 'FAQ',
      'faq.title': 'Συχνές Ερωτήσεις',
      'faq.q1': 'Ποιες είναι οι ώρες λειτουργίας;',
      'faq.a1': 'Είμαστε ανοιχτά καθημερινά από 09:00 το πρωί έως 05:00 τα ξημερώματα.',
      'faq.q2': 'Πού βρίσκεστε;',
      'faq.a2': 'Λεωφόρος Βασιλέως Γεωργίου 44, Θεσσαλονίκη 54640 — ακριβώς στο κέντρο της πόλης.',
      'faq.q3': 'Τι είδους μαγαζί είστε;',
      'faq.a3': 'Είμαστε ένα ζεστό ντισκοκαφενείο που συνδυάζει specialty coffee, πλούσιο brunch, cocktails και live μουσικές βραδιές.',
      'faq.q4': 'Κάνετε ζωντανή μουσική;',
      'faq.a4': 'Ναι! Διοργανώνουμε live βραδιές, parties και events. Ακολούθησέ μας στο Instagram για το πρόγραμμα.',
      'faq.q5': 'Πώς μπορώ να κλείσω τραπέζι;',
      'faq.a5': 'Κάλεσέ μας στο',
      'faq.a5b': 'ή στείλε μήνυμα στο Instagram.',
      'contact.title': 'Επικοινωνία',
      'contact.address': 'Διεύθυνση',
      'contact.phone': 'Τηλέφωνο',
      'contact.hours': 'Ώρες',
      'contact.hours.detail': 'Καθημερινά: 09:00 – 05:00',
      'footer.tagline': 'Το νέο σου στέκι στην πόλη!'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.menu': 'Menu',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'hero.title': 'Jamaica Diskokafeneio',
      'hero.tagline': 'Your new hangout in town!',
      'hero.sub': 'Breakfast  •  Brunch  •  Café  •  Disco',
      'hero.cta': 'Find us',
      'about.title': 'About',
      'about.p1': 'Jamaica is Thessaloniki\'s newest hangout — a warm meeting place combining relaxed coffee moments, creative brunch, and unforgettable live nights.',
      'about.p2': 'At 44 Vasileos Georgiou Avenue, we welcome you every day from 09:00 to 05:00. Here the day starts with the aroma of coffee and ends with music and good company.',
      'about.hours': 'Opening Hours',
      'about.hours.daily': 'Daily: 09:00 – 05:00',
      'about.findus': 'Find us',
      'menu.title': 'Menu',
      'menu.intro': 'From morning coffee to late-night cocktails — every taste has its place at Jamaica.',
      'menu.coffee': 'Coffee',
      'menu.coffee.desc': 'Espresso, cappuccino, freddo, specialty coffee & more.',
      'menu.brunch': 'Brunch',
      'menu.brunch.desc': 'Hearty brunch with fresh ingredients every day.',
      'menu.cocktails': 'Cocktails',
      'menu.cocktails.desc': 'Refreshing cocktails, spirits & selected wines.',
      'menu.events': 'Live Events',
      'menu.events.desc': 'Live music nights, parties, and surprises.',
      'menu.note': 'Follow us on Instagram for the full menu & daily specials!',
      'gallery.title': 'Gallery',
      'nav.faq': 'FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'What are your opening hours?',
      'faq.a1': 'We are open daily from 09:00 to 05:00.',
      'faq.q2': 'Where are you located?',
      'faq.a2': '44 Vasileos Georgiou Avenue, Thessaloniki 54640 — right in the city center.',
      'faq.q3': 'What kind of place are you?',
      'faq.a3': 'We\'re a cozy café-bar-disco combining specialty coffee, hearty brunch, cocktails, and live music nights.',
      'faq.q4': 'Do you have live music?',
      'faq.a4': 'Yes! We host live nights, parties, and events. Follow us on Instagram for the schedule.',
      'faq.q5': 'How can I make a reservation?',
      'faq.a5': 'Call us at',
      'faq.a5b': 'or send a message on Instagram.',
      'contact.title': 'Contact',
      'contact.address': 'Address',
      'contact.phone': 'Phone',
      'contact.hours': 'Hours',
      'contact.hours.detail': 'Daily: 09:00 – 05:00',
      'footer.tagline': 'Your new hangout in town!'
    }
  };

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';
    document.querySelectorAll('[data-el]').forEach(el => {
      const key = el.getAttribute('data-el');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });
    document.getElementById('langToggle').textContent = lang === 'el' ? 'EN' : 'ΕΛ';
  }

  function toggleLang() {
    setLang(currentLang === 'el' ? 'en' : 'el');
  }

  function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    let loaded = 0;
    function tryNext(i) {
      const img = new Image();
      img.onload = function () {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = '<img src="images/' + i + '.jpg" alt="Jamaica photo ' + i + '" loading="lazy">';
        item.addEventListener('click', function () {
          openLightbox('images/' + i + '.jpg');
        });
        grid.appendChild(item);
        loaded++;
        tryNext(i + 1);
      };
      img.onerror = function () {
        if (loaded === 0) {
          for (let p = 0; p < 6; p++) {
            const placeholder = document.createElement('div');
            placeholder.className = 'gallery-item';
            grid.appendChild(placeholder);
          }
        }
      };
      img.src = 'images/' + i + '.jpg';
    }
    tryNext(1);
  }

  function openLightbox(src) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = '<div class="lightbox-bg"></div><img class="lightbox-img" src="' + src + '" alt=""><button class="lightbox-close">&times;</button>';
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-bg') || e.target.classList.contains('lightbox-close')) {
        document.body.removeChild(overlay);
        document.body.classList.remove('no-scroll');
      }
    });
    document.body.appendChild(overlay);
    document.body.classList.add('no-scroll');
    requestAnimationFrame(function () {
      overlay.classList.add('visible');
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  function highlightNav() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav a');
    let currentId = '';
    sections.forEach(function (sec) {
      const top = sec.offsetTop - 150;
      if (window.scrollY >= top) {
        currentId = sec.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.parentElement;
        item.classList.toggle('open');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(currentLang);
    document.getElementById('langToggle').addEventListener('click', toggleLang);
    document.getElementById('menuToggle').addEventListener('click', function () {
      document.getElementById('nav').classList.toggle('open');
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.getElementById('nav').classList.remove('open');
      });
    });
    window.addEventListener('scroll', function () {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 80);
      highlightNav();
    });
    loadGallery();
    initReveal();
    initFAQ();
  });
})();
