// ========== TRANSLATIONS ==========
const lang = {
  el: {
    nav_about: "Ιστορία",
    nav_dishes: "Πιάτα",
    nav_menu: "Μενού",
    nav_locations: "Καταστήματα",
    nav_gallery: "Φωτογραφίες",
    nav_contact: "Επικοινωνία",
    hero_pre: "Καλώς ήρθατε στο",
    hero_tagline: "Grill & Steakhouse",
    hero_sub: "Κρέατα στα κάρβουνα — απλά, αληθινά, απίστευτα νόστιμα",
    hero_btn1: "Βρες μας",
    hero_btn2: "Δες το μενού",
    hero_btn3: "2310 869 154",
    scroll_hint: "Κυλήστε",
    about_title: "Η Ιστορία μας",
    about_p1: "Το steakhouse «Φάτε Σκάστε» άνοιξε στη οδό Βασιλέως Γεωργίου 24 τον Ιανουάριο του 2016 και από τότε έχει κερδίσει το δικό του φανατικό κοινό, που το προτιμά τόσο για τις εξόδους του όσο και για τις παραγγελίες στο σπίτι ή το γραφείο.",
    about_p2: "Οι μερίδες και τα σάντουιτς του, νόστιμα και πλούσια, σε κάνουν να θες να παραγγείλεις ξανά, ακόμα κι αν έχεις ήδη χορτάσει από την πρώτη παραγγελία. Γι' αυτό, όταν το 2019 άνοιξε το δεύτερο κατάστημα στο κέντρο της πόλης – σε ένα ιστορικό σημείο στα Λαδάδικα – δεν χρειάστηκε συστάσεις και έγινε αμέσως αγαπημένος προορισμός για τους λάτρεις του καλοψημένου κρέατος.",
    about_p3: "Ο Στέργιος και η Λία δημιούργησαν το «Φάτε Σκάστε» θέλοντας να προσφέρουν στον κόσμο το καλύτερο κρέας, με πρώτες ύλες από Έλληνες παραγωγούς και προϊόντα που παρασκευάζονται καθημερινά και εξ ολοκλήρου στο κατάστημα, όπου ψήνονται αποκλειστικά στα κάρβουνα, για να έχουν τη γεύση που οι ίδιοι επιθυμούν.",
    about_p4: "Κρέατα πρώτης ποιότητας ψήνονται – αποκλειστικά στα κάρβουνα – με μαεστρία και τα απολαμβάνουμε σε ένα απλό και άνετο περιβάλλον, που μυρίζει νοστιμιά, όπως ακριβώς πρέπει να μυρίζει ένα σοβαρό ψητοπωλείο.",
    dishes_title: "Από την Κουζίνα μας",
    dishes_sub: "Μια γεύση από όσα ετοιμάζουμε καθημερινά με μεράκι",
    dish_1_title: "Ψητά στα κάρβουνα",
    dish_1_desc: "Όλα τα πιάτα μας ψήνονται αποκλειστικά στα κάρβουνα, για αυθεντική γεύση",
    dish_2_title: "Φρέσκες πρώτες ύλες",
    dish_2_desc: "Επιλέγουμε πρώτες ύλες από Έλληνες παραγωγούς για ανώτερη ποιότητα",
    dish_3_title: "Μεράκι και τέχνη",
    dish_3_desc: "Κάθε πιάτο ετοιμάζεται με προσοχή, από έμπειρα χέρια, καθημερινά στο κατάστημα",
    dish_4_title: "Ζουμερά και πλούσια",
    dish_4_desc: "Πλούσιες μερίδες που ικανοποιούν και τους πιο απαιτητικούς",
    dish_5_title: "Παραδοσιακές γεύσεις",
    dish_5_desc: "Σεβόμαστε την παράδοση, προσθέτοντας τη δική μας μοντέρνα πινελιά",
    dish_6_title: "Για κάθε στιγμή",
    dish_6_desc: "Στο μαγαζί, σε πακέτο, στο σπίτι ή στο γραφείο — όπου κι αν είσαι",
    menu_title: "Το Μενού μας",
    menu_sub: "Όλα ψήνονται αποκλειστικά στα κάρβουνα, με κρέατα πρώτης ποιότητας",
    menu_1_title: "Κοντός Σουβλιστός",
    menu_1_desc: "Κοτόπουλο και χοιρινό κοντόσουβλο, σε μερίδα με πατάτες και σαλάτα εποχής, σε αραβική πίτα, σε κλασικό ή club sandwich. Η υπογραφή μας.",
    menu_2_title: "Σουβλάκι & Γύρος",
    menu_2_desc: "Χοιρινός γύρος, σουβλάκι, σπιτικές τηγανιτές πατάτες. Όλες οι κλασικές επιλογές με τη δική μας πινελιά.",
    menu_3_title: "Ελασσονίτικο & Μπιφτέκια",
    menu_3_desc: "Χοιρινό ρολό τυλιγμένο σε κεφαλοτύρι, γεμιστό με πιπεριά, και ψητά μπιφτέκια σε αραβική πίτα με πανσέτα.",
    menu_4_title: "Club & Σάντουιτς",
    menu_4_desc: "Μοναδικό club sandwich με μουστάρδα, ντομάτα, μαρούλι, κρεμμύδι και ψητή μπριζόλα στη σχάρα.",
    menu_5_title: "Vegetarian",
    menu_5_desc: "Ελαφριά σάντουιτς με μανιτάρι και χαλούμι, φαλάφελ, λαχανικό burger και δροσερές σαλάτες.",
    menu_6_title: "Πανσέτα & Λουκάνικα",
    menu_6_desc: "Πανσέτα, λουκάνικα, παϊδάκια — όλα ψημένα στα κάρβουνα, όπως πρέπει.",
    locations_title: "Καταστήματα",
    loc1_badge: "Από το 2016",
    loc1_title: "Βασιλέως Γεωργίου 24",
    loc1_sub: "Κέντρο Θεσσαλονίκης",
    loc2_badge: "Από το 2019",
    loc2_title: "Πολυτεχνείου 51, Λαδάδικα",
    loc2_sub: "Ιστορικό κέντρο",
    directions_btn: "Οδηγίες",
    gallery_title: "Φωτογραφίες",
    gallery_sub: "Ρίξτε μια ματιά στο χώρο και τα πιάτα μας",
    footer_tag: "Grill & Steakhouse — Αποκλειστικά στα κάρβουνα",
    footer_desc: "Κρέατα πρώτης ποιότητας από Έλληνες παραγωγούς, ψημένα αποκλειστικά στα κάρβουνα. Από το 2016 στο κέντρο της Θεσσαλονίκης.",
    footer_links_title: "Πλοήγηση",
    footer_contact_title: "Επικοινωνία",
    footer_addr: "Βασ. Γεωργίου 24 & Πολυτεχνείου 51",
    footer_social_title: "Ακολουθήστε μας",
    footer_copy: "© 2026 Φάτε Σκάστε. Μεράκι και κάρβουνο."
  },

  en: {
    nav_about: "About",
    nav_dishes: "Dishes",
    nav_menu: "Menu",
    nav_locations: "Locations",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_pre: "Welcome to",
    hero_tagline: "Grill & Steakhouse",
    hero_sub: "Meat on coals — simple, honest, incredibly delicious",
    hero_btn1: "Find us",
    hero_btn2: "View menu",
    hero_btn3: "2310 869 154",
    scroll_hint: "Scroll",
    about_title: "Our Story",
    about_p1: "The steakhouse \"Fate Skaste\" opened at 24 Vasileos Georgiou Street in January 2016 and since then it has won its own fanatical audience, who prefer it both for their outings and for their orders at home or the office.",
    about_p2: "Its portions and sandwiches, delicious and rich, make you want to order again because of the deliciousness, even if you are already completely full from the first order. For this reason, when in 2019 the second store opened in the city center — in a historic spot in Ladadika — it did not need much introduction and immediately became a favorite destination for lovers of well-cooked meats.",
    about_p3: "Stergios and Lia created \"Fate Skaste\" wanting to offer the world the best in meat, with raw materials from domestic producers and products that are prepared daily and entirely on site in the store, where they are grilled exclusively on coals, to have the taste that they themselves desire.",
    about_p4: "First quality meats are grilled – exclusively on coals – with mastery and we taste them in a simple and comfortable environment, which smells of deliciousness, as any self-respecting grill should smell.",
    dishes_title: "From Our Kitchen",
    dishes_sub: "A taste of what we prepare daily with passion",
    dish_1_title: "Grilled on coals",
    dish_1_desc: "All our dishes are grilled exclusively on coals for authentic flavor",
    dish_2_title: "Fresh ingredients",
    dish_2_desc: "We source from Greek producers for the highest quality",
    dish_3_title: "Craft and care",
    dish_3_desc: "Every dish is prepared with care by experienced hands, daily on site",
    dish_4_title: "Juicy and generous",
    dish_4_desc: "Generous portions that satisfy even the most demanding appetites",
    dish_5_title: "Traditional flavors",
    dish_5_desc: "We respect tradition while adding our own modern touch",
    dish_6_title: "For every moment",
    dish_6_desc: "At the shop, takeaway, at home or the office — wherever you are",
    menu_title: "Our Menu",
    menu_sub: "Everything is grilled exclusively on coals, with prime quality meats",
    menu_1_title: "Spit-Roasted Meat",
    menu_1_desc: "Chicken and pork kontosouvli, as a portion with potatoes and seasonal salad, in Arabic pita, classic or club sandwich. Our signature.",
    menu_2_title: "Souvlaki & Gyros",
    menu_2_desc: "Pork gyros, souvlaki, homemade french fries. All the classic choices with our own touch.",
    menu_3_title: "Elassonitiko & Meatballs",
    menu_3_desc: "Pork roll wrapped in kefalotiri cheese, stuffed with peppers, and grilled meatballs in Arabic pita with pancetta.",
    menu_4_title: "Club & Sandwiches",
    menu_4_desc: "Unique club sandwich with mustard sauce, tomato, lettuce, onion, and grilled spit steak.",
    menu_5_title: "Vegetarian",
    menu_5_desc: "Light sandwiches with mushroom and halloumi skewers, falafel, veggie burger and fresh salads.",
    menu_6_title: "Pancetta & Sausages",
    menu_6_desc: "Pancetta, sausages, ribs — all grilled on coals, the way they should be.",
    locations_title: "Locations",
    loc1_badge: "Since 2016",
    loc1_title: "24 Vasileos Georgiou Str.",
    loc1_sub: "Thessaloniki Center",
    loc2_badge: "Since 2019",
    loc2_title: "51 Politechniou Str., Ladadika",
    loc2_sub: "Historic center",
    directions_btn: "Directions",
    gallery_title: "Gallery",
    gallery_sub: "Take a look at our space and dishes",
    footer_tag: "Grill & Steakhouse — Exclusively on coals",
    footer_desc: "Prime quality meats from Greek producers, grilled exclusively on coals. Since 2016 in the heart of Thessaloniki.",
    footer_links_title: "Navigate",
    footer_contact_title: "Contact",
    footer_addr: "Vas. Georgiou 24 & Politechniou 51",
    footer_social_title: "Follow us",
    footer_copy: "© 2026 Fate Skaste. Passion and charcoal."
  }
};

let current = "el";

function setLang(l) {
  current = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;
    if (lang[l][key]) el.textContent = lang[l][key];
  });
  document.querySelectorAll(".lang-el, .lang-en").forEach(el => {
    el.classList.toggle("active", el.classList.contains(`lang-${l}`));
  });
}

// ========== HERO CAROUSEL ==========
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;
let slideTimer;

function showSlide(i) {
  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === i);
  });
  dots.forEach((d, idx) => {
    d.classList.toggle("active", idx === i);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function startCarousel() {
  slideTimer = setInterval(nextSlide, 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(i);
    clearInterval(slideTimer);
    startCarousel();
  });
});

if (slides.length > 0) startCarousel();

// ========== HEADER SCROLL ==========
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  header.classList.toggle("scrolled", scrollY > 50);
  backToTop.classList.toggle("visible", scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========== ACTIVE NAV ==========
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { threshold: 0.3, rootMargin: "-20% 0px" });

sections.forEach(s => navObserver.observe(s));

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ========== LIGHTBOX ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCounter = document.getElementById("lightboxCounter");
const galleryItems = document.querySelectorAll(".gallery-item img");
let currentImgIndex = 0;

function openLightbox(index) {
  currentImgIndex = index;
  const src = galleryItems[index].src;
  lightboxImg.src = src;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  updateCounter();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function prevImage() {
  currentImgIndex = (currentImgIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentImgIndex].src;
  updateCounter();
}

function nextImage() {
  currentImgIndex = (currentImgIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentImgIndex].src;
  updateCounter();
}

function updateCounter() {
  lightboxCounter.textContent = `${currentImgIndex + 1} / ${galleryItems.length}`;
}

galleryItems.forEach((img, i) => {
  img.addEventListener("click", () => openLightbox(i));
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", prevImage);
document.getElementById("lightboxNext").addEventListener("click", nextImage);

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

// ========== MOBILE MENU ==========
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
  document.getElementById("menuToggle").textContent =
    document.getElementById("nav").classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
    document.getElementById("menuToggle").textContent = "☰";
  });
});

// ========== LANG TOGGLE ==========
document.getElementById("langToggle").addEventListener("click", () => {
  setLang(current === "el" ? "en" : "el");
});
