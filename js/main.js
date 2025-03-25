document.addEventListener("DOMContentLoaded", function() {
  // Top menu banner animation
  const topMenu = document.querySelector('.top-menu');
  const headerBanner = document.querySelector('.header-banner');
  const bannerTitle = document.querySelector('.banner-title');
  const bannerDesc = document.querySelector('.banner-desc');
  const menuLinks = document.querySelectorAll('.menu a');

  // Banner hover logic
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const title = link.getAttribute('data-banner-title') || "";
      const desc = link.getAttribute('data-banner-desc') || "";
      bannerTitle.textContent = title;
      bannerDesc.textContent = `"${desc}"`;
    });
  });

  topMenu.addEventListener('mouseenter', () => {
    headerBanner.style.height = "33vh";
    headerBanner.style.padding = "20px 40px";
  });

  topMenu.addEventListener('mouseleave', () => {
    headerBanner.style.height = "0";
    headerBanner.style.padding = "0 40px";
  });

  // Radar Chart Configuration
  const skills = {
    "Process Optimization": 85,
    "Innovative Design": 80,
    "Prototyping": 75,
    "Project Management": 70,
    "Digital Skills": 65
  };

  const radarChart = document.querySelector('.radar-chart');
  const points = [];
  
  Object.values(skills).forEach((percent, index) => {
    const angle = (index * 72 - 90) * (Math.PI / 180);
    const radius = 40 * (percent / 100);
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    points.push(`${x},${y}`);
    
    // Create skill labels
    const label = document.createElement('div');
    label.className = 'skill-label';
    label.textContent = Object.keys(skills)[index];
    label.setAttribute('data-skill', Object.keys(skills)[index]);
    radarChart.appendChild(label);
  });

  document.querySelector('.pentagon-skill').setAttribute('points', points.join(' '));

// In main.js, sostituisci le animazioni con:
document.querySelectorAll('.slide-in, .fade-in').forEach(el => {
  el.style.opacity = '0';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[class*="slide"], [class*="fade"]').forEach(el => {
  observer.observe(el);
});

// Applica l'Observer a tutte le sezioni
document.querySelectorAll('.cv-section').forEach((section, index) => {
  section.style.transitionDelay = `${index * 0.2}s`;
  observer.observe(section);
});

  // Contact Card Animation
  const contactCard = document.querySelector('.contact-card');
  if (contactCard) {
    contactCard.style.opacity = "1";
    contactCard.style.transform = "translateY(0)";
  }
});

// Gestione toggle lingua
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.lang-btn.active').classList.remove('active');
    this.classList.add('active');
    const lang = this.dataset.lang;
    // Aggiungi qui la logica per cambiare contenuti
    // Gestione lingua
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Rimuovi classe active da tutti i bottoni
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    // Aggiungi classe active al bottone cliccato
    this.classList.add('active');
    
    // Seleziona tutti gli elementi con attributo data-lang
    const lang = this.dataset.lang;
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.dataset.lang === lang ? 'block' : 'none';
    });
  });
});
  });
});