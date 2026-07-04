const menuData = [
  {
    gr: 'Καφές & Αναψυκτικά', en: 'Coffee & Drinks', icon: '\u2615',
    items: [
      { gr: 'Νεσκαφέ Φραπέ', en: 'Nescafe Frapp\u00e9', price: '\u20ac5.50' },
      { gr: 'Νεσκαφέ (ζεστός)', en: 'Nescafe (hot)', price: '\u20ac5.50' },
      { gr: 'Φραπέ παγωτό', en: 'Frapp\u00e9 with ice cream', price: '\u20ac7.50' },
      { gr: 'Εσπρέσο Μονός', en: 'Espresso Single', price: '\u20ac4.50' },
      { gr: 'Εσπρέσο Διπλός', en: 'Espresso Double', price: '\u20ac5.50' },
      { gr: 'Freddo Espresso', en: 'Freddo Espresso', price: '\u20ac5.50' },
      { gr: 'Freddo Cappuccino', en: 'Freddo Cappuccino', price: '\u20ac5.50' },
      { gr: 'Καπουτσίνο', en: 'Cappuccino', price: '\u20ac5.50' },
      { gr: 'Ντεκαφεϊνέ', en: 'Decaf', price: '\u20ac5.50' },
      { gr: 'Ελληνικός', en: 'Greek Coffee', price: '\u20ac4.50' },
      { gr: 'Ελληνικός διπλός', en: 'Greek Coffee double', price: '\u20ac5.50' },
      { gr: 'Κρύα σοκολάτα', en: 'Cold chocolate', price: '\u20ac7.00' },
      { gr: 'Ζεστή σοκολάτα', en: 'Hot chocolate', price: '\u20ac7.00' },
      { gr: 'Μεταλλικό νερό 0,5lt', en: 'Bottled water 0.5L', price: '\u20ac1.00' },
      { gr: 'Σόδα', en: 'Soda', price: '\u20ac5.50' },
      { gr: 'Τόνικ', en: 'Tonic', price: '\u20ac5.50' },
      { gr: 'Ανθρακούχο νερό', en: 'Sparkling water', price: '\u20ac5.50' },
      { gr: 'Coca cola', en: 'Coca Cola', price: '\u20ac5.50' },
      { gr: 'Λεμονάδα', en: 'Lemonade', price: '\u20ac5.50' },
      { gr: 'Πορτοκαλάδα', en: 'Orange soda', price: '\u20ac5.50' },
      { gr: 'Sprite', en: 'Sprite', price: '\u20ac5.50' },
      { gr: 'Pink Grapefruit Soda', en: 'Pink Grapefruit Soda', price: '\u20ac6.50' },
      { gr: 'Σπιτική λεμονάδα', en: 'Homemade lemonade', price: '\u20ac7.00' },
      { gr: 'Φυσικός Χυμός Πορτοκάλι', en: 'Fresh orange juice', price: '\u20ac7.00' },
      { gr: 'Smoothies', en: 'Smoothies (frozen)', price: '\u20ac7.00' },
      { gr: 'Smoothies με αλκοόλ', en: 'Smoothies with alcohol (frozen)', price: '\u20ac12.00' },
      { gr: 'Χυμοί φρούτων Amita', en: 'Amita fruit juices', price: '\u20ac6.00' },
      { gr: 'Γρανίτα φράουλα', en: 'Strawberry granita', price: '\u20ac7.00' },
      { gr: 'Γρανίτα λεμόνι', en: 'Lemon granita', price: '\u20ac7.00' },
      { gr: 'Κρύο τσάι ροδάκινο', en: 'Peach iced tea', price: '\u20ac6.00' },
      { gr: 'Κρύο τσάι λεμόνι', en: 'Lemon iced tea', price: '\u20ac6.00' },
      { gr: 'Πράσινο τσάι λεμόνι', en: 'Green tea lemon (no calories)', price: '\u20ac6.00' },
      { gr: 'Μιλκσέικ', en: 'Milkshake', price: '\u20ac7.50' },
      { gr: 'Gordon\u2019s space 275ml', en: 'Gordon\u2019s space 275ml', price: '\u20ac7.50' },
      { gr: 'Red Bull Energy Drink', en: 'Red Bull Energy Drink', price: '\u20ac7.00' },
    ]
  },
  {
    gr: 'Μπύρα & Κρασί', en: 'Beer & Wine', icon: '\uD83C\uDF77',
    items: [
      { gr: 'Ελληνικής παραγωγής 330ml', en: 'Greek beer 330ml', price: '\u20ac7.00' },
      { gr: 'Εισαγωγής 330ml', en: 'Imported beer 330ml', price: '\u20ac7.50' },
      { gr: 'Heineken Silver 330ml', en: 'Heineken Silver 330ml', price: '\u20ac7.50' },
      { gr: 'Τζουλιέτα Γεωργιάδη Λευκός', en: 'Julieta Georgiadi White', price: '\u20ac9.00', descGr: 'Ξηρός', descEn: 'Dry' },
      { gr: 'Τζουλιέτα Γεωργιάδη Ερυθρός', en: 'Julieta Georgiadi Red', price: '\u20ac9.00', descGr: 'Ξηρός (Αγιωργίτικο)', descEn: 'Dry (Agiorgitiko)' },
      { gr: 'Βιβλία Χώρα', en: 'Vivlia Chora', price: '\u20ac40.00' },
      { gr: 'Κτήμα Άλφα', en: 'Ktima Alpha', price: '\u20ac40.00' },
      { gr: 'Κτήμα Άλφα Μαλαγουζία', en: 'Ktima Alpha Malagousia', price: '\u20ac40.00' },
      { gr: 'Τέχνη Αλυπίας', en: 'Techni Alypias', price: '\u20ac40.00' },
      { gr: 'Κάρυος Γη', en: 'Karyos Gi', price: '\u20ac40.00' },
      { gr: 'Κτήμα Άλφα Ροζέ', en: 'Ktima Alpha Ros\u00e9', price: '\u20ac40.00' },
      { gr: 'Idylle d\u2019 Achinos', en: 'Idylle d\u2019 Achinos', price: '\u20ac40.00', descGr: 'La Tour Melas', descEn: 'La Tour Melas' },
      { gr: 'Miraval Chateau', en: 'Miraval Chateau', price: '\u20ac70.00', descGr: 'C\u00f4tes de Provence', descEn: 'C\u00f4tes de Provence' },
      { gr: 'Prosecco', en: 'Prosecco', price: '\u20ac10.00' },
      { gr: 'Mo\u00ebt Ice Imperial 750ml', en: 'Mo\u00ebt Ice Imperial 750ml', price: '\u20ac140.00' },
    ]
  },
  {
    gr: 'Ποτά & Κοκτέιλ', en: 'Spirits & Cocktails', icon: '\uD83C\uDF78',
    items: [
      { gr: 'Απλό Ποτό', en: 'Standard drink', price: '\u20ac11.00' },
      { gr: 'Απλή Φιάλη', en: 'Standard bottle', price: '\u20ac110.00' },
      { gr: 'Σπέσιαλ Ποτό', en: 'Special drink', price: '\u20ac13.00' },
      { gr: 'Σπέσιαλ Φιάλη', en: 'Special bottle', price: '\u20ac130.00' },
      { gr: 'Belvedere / Grey Goose Ποτό', en: 'Belvedere / Grey Goose drink', price: '\u20ac14.00' },
      { gr: 'Belvedere / Grey Goose Φιάλη', en: 'Belvedere / Grey Goose bottle', price: '\u20ac140.00' },
      { gr: 'Ούζο', en: 'Ouzo', price: '\u20ac7.00' },
      { gr: 'Σφηνάκια', en: 'Shots', price: '\u20ac4.00' },
      { gr: 'Shaker', en: 'Shaker', price: '\u20ac25.00' },
      { gr: 'Mojito', en: 'Mojito', price: '\u20ac12.50' },
      { gr: 'Mojito Φράουλα', en: 'Strawberry Mojito', price: '\u20ac12.50' },
      { gr: 'Μαργαρίτα φράουλα', en: 'Strawberry Margarita', price: '\u20ac12.50' },
      { gr: 'Cosmopolitan', en: 'Cosmopolitan', price: '\u20ac12.50' },
      { gr: 'Cuba libre', en: 'Cuba Libre', price: '\u20ac12.50' },
      { gr: 'Caipirinha', en: 'Caipirinha', price: '\u20ac12.50' },
      { gr: 'Pina Colada', en: 'Pina Colada', price: '\u20ac12.50' },
      { gr: 'Apple martini', en: 'Apple Martini', price: '\u20ac12.50' },
      { gr: 'Sex on the beach', en: 'Sex on the Beach', price: '\u20ac12.50' },
      { gr: 'Negroni', en: 'Negroni', price: '\u20ac12.50' },
      { gr: 'Aperol Spritz', en: 'Aperol Spritz', price: '\u20ac12.50' },
      { gr: 'Daiquiri', en: 'Daiquiri', price: '\u20ac12.50' },
      { gr: 'Daiquiri Strawberry/Peach', en: 'Daiquiri Strawberry/Peach', price: '\u20ac12.50' },
      { gr: 'Paloma', en: 'Paloma', price: '\u20ac12.50' },
      { gr: '6\u03b7 Αίσθηση - Ελληνικό Σπριτς', en: '6th Sense - Greek Spritz', price: '\u20ac12.50' },
      { gr: 'MAI TAI', en: 'MAI TAI', price: '\u20ac12.50' },
      { gr: 'KYOTO', en: 'KYOTO', price: '\u20ac12.50' },
    ]
  },
  {
    gr: 'Φαγητό & Σνακ', en: 'Food & Snacks', icon: '\uD83C\uDF55',
    items: [
      { gr: 'Παγωτά \u201cAlfa\u201d', en: 'Alfa ice cream', price: '\u20ac2.50', descGr: '14 \u03b3\u03b5\u03cd\u03c3\u03b5\u03b9\u03c2', descEn: '14 flavors' },
      { gr: 'Πράσινη σαλάτα με τόνο', en: 'Green salad with tuna', price: '\u20ac11.00' },
      { gr: 'Πράσινη σαλάτα με ντομάτα', en: 'Green salad with tomato', price: '\u20ac11.00' },
      { gr: 'Φρουτοσαλάτα', en: 'Fruit salad', price: '\u20ac9.00', descGr: 'με \u03c6\u03c1\u03bf\u03cd\u03c4\u03b1 εποχής', descEn: 'seasonal fruits' },
      { gr: 'Φρουτοσαλάτα Special', en: 'Fruit salad Special', price: '\u20ac12.00' },
      { gr: 'Γιαούρτι με μέλι', en: 'Yogurt with honey', price: '\u20ac7.50' },
      { gr: 'Γιαούρτι με φρούτα', en: 'Yogurt with fruits', price: '\u20ac7.50' },
      { gr: 'Caesar\u2019s', en: "Caesar's salad", price: '\u20ac12.00' },
      { gr: 'Τοστ Gouda', en: 'Gouda toast', price: '\u20ac5.50', descGr: '\u03a3\u03b5\u03c1\u03b2\u03af\u03c1\u03b5\u03c4\u03b1\u03b9 με \u03c4\u03c3\u03b9\u03c0\u03c2', descEn: 'Served with chips' },
      { gr: 'Τοστ Gouda & \u0393\u03b1\u03bb\u03bf\u03c0\u03bf\u03cd\u03bb\u03b1', en: 'Gouda & turkey toast', price: '\u20ac6.00', descGr: '\u03a3\u03b5\u03c1\u03b2\u03af\u03c1\u03b5\u03c4\u03b1\u03b9 με chips', descEn: 'Served with chips' },
      { gr: 'Κοτομπουκιές', en: 'Chicken nuggets', price: '\u20ac8.00' },
      { gr: 'BBQ \u03c6\u03c4\u03b5\u03c1\u03bf\u03cd\u03b3\u03b5\u03c2', en: 'BBQ chicken wings', price: '\u20ac9.00' },
      { gr: 'Μαργαρίτα', en: 'Margherita', price: '\u20ac11.00' },
      { gr: 'Πεπερόνι', en: 'Pepperoni', price: '\u20ac13.00' },
      { gr: 'Special', en: 'Special', price: '\u20ac14.00' },
    ]
  },
];

let currentLang = 'gr';
let activeCategory = 0;

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  const btn = document.querySelector('.lang-btn');
  if (btn) btn.textContent = lang === 'gr' ? 'EN' : 'GR';
  renderTabs();
  renderItems();
  localStorage.setItem('encore-lang', lang);
}

function renderTabs() {
  const container = document.getElementById('menuTabs');
  if (!container) return;
  const lang = currentLang;

  container.innerHTML = menuData.map((cat, idx) => `
    <button class="menu-tab ${idx === activeCategory ? 'active' : ''}" onclick="selectCategory(${idx})">
      <span class="tab-icon">${cat.icon}</span>
      <span>${lang === 'gr' ? cat.gr : cat.en}</span>
    </button>
  `).join('');
}

function renderItems() {
  const container = document.getElementById('menuContent');
  if (!container) return;
  const cat = menuData[activeCategory];
  if (!cat) return;
  const lang = currentLang;

  container.innerHTML = `
    <div class="menu-items-grid">
      ${cat.items.map(item => `
        <div class="menu-item-card">
          <div>
            <div class="item-name">${lang === 'gr' ? item.gr : item.en}</div>
            ${item.descGr ? `<div class="item-desc">${lang === 'gr' ? item.descGr : item.descEn}</div>` : ''}
          </div>
          <span class="item-price">${item.price}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function selectCategory(idx) {
  if (idx === activeCategory) return;
  activeCategory = idx;
  renderTabs();
  renderItems();
  document.querySelector('.menu-tab.active')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function toggleMobileMenu() {
  document.querySelector('.nav-links')?.classList.toggle('active');
}

function openLightbox(imgSrc) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const items = document.querySelectorAll('.gallery-item img');
  if (!lb || !lbImg) return;

  let idx = -1;
  items.forEach((img, i) => {
    const src = img.getAttribute('src') || '';
    if (src === imgSrc || imgSrc.endsWith(src.split('/').pop())) idx = i;
  });

  lbImg.src = imgSrc;
  lb.classList.add('active');
  lb.dataset.currentIdx = idx;
  if (counter) counter.textContent = `${idx + 1} / ${items.length}`;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const items = document.querySelectorAll('.gallery-item img');
  if (!lb || !lbImg) return;

  let idx = parseInt(lb.dataset.currentIdx);
  if (isNaN(idx)) return;

  idx += dir;
  if (idx < 0) idx = items.length - 1;
  if (idx >= items.length) idx = 0;

  lb.dataset.currentIdx = idx;
  lbImg.src = items[idx].getAttribute('src') || items[idx].src;
  if (counter) counter.textContent = `${idx + 1} / ${items.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('encore-lang') || 'gr';
  setLang(savedLang);

  // Loading screen
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingBar = document.getElementById('loadingBar');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress > 100) progress = 100;
    if (loadingBar) loadingBar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (loadingScreen) loadingScreen.classList.add('hidden');
      }, 300);
    }
  }, 150);

  // Particles
  const container = document.querySelector('.hero-particles');
  if (container) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 6 + 's';
      p.style.animationDuration = (6 + Math.random() * 4) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
      container.appendChild(p);
    }
  }

  // Parallax
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    if (heroBg) {
      const scrolled = window.pageYOffset;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObs.observe(el);
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // Nav visibility
  let lastScroll = 0;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > lastScroll && curr > 200) {
      nav?.classList.add('hidden-nav');
    } else {
      nav?.classList.remove('hidden-nav');
    }
    lastScroll = curr;
  });

  // Back to top
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (backBtn) {
      backBtn.classList.toggle('visible', window.scrollY > 500);
    }
  });
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Lang button
  document.querySelector('.lang-btn')?.addEventListener('click', () => {
    setLang(currentLang === 'gr' ? 'en' : 'gr');
  });

  // Mobile nav close
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.remove('active');
    });
  });

  // Lightbox close on bg click
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox')?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Update year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
