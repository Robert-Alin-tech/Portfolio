document.addEventListener("DOMContentLoaded", function() {
  // ====================== [EXISTING FUNCTIONALITY] ====================== //
  
  // Top menu banner animation
  const topMenu = document.querySelector('.top-menu');
  const headerBanner = document.querySelector('.header-banner');
  const bannerTitle = document.querySelector('.banner-title');
  const bannerDesc = document.querySelector('.banner-desc');
  const menuLinks = document.querySelectorAll('.menu a');

  // Menu Push Effect
  if(topMenu) {
    const mainContent = document.querySelector('.main');
    topMenu.addEventListener('mouseenter', () => {
      topMenu.classList.add('top-menu-expanded');
      mainContent.style.marginTop = `${topMenu.offsetHeight}px`;
    });

    topMenu.addEventListener('mouseleave', () => {
      topMenu.classList.remove('top-menu-expanded');
      mainContent.style.marginTop = '100px';
    });
  }

  // Banner hover logic
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const title = link.getAttribute('data-banner-title') || "";
      const desc = link.getAttribute('data-banner-desc') || "";
      bannerTitle.textContent = title;
      bannerDesc.textContent = `"${desc}"`;
    });
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
  if(radarChart) {
    const points = [];
    Object.values(skills).forEach((percent, index) => {
      const angle = (index * 72 - 90) * (Math.PI / 180);
      const radius = 40 * (percent / 100);
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    });
    document.querySelector('.pentagon-skill').setAttribute('points', points.join(' '));
  }

  // Intersection Observer for CV sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('cv-section')) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
      }
    });
  }, observerOptions);

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

  // ====================== [NEW FORM FUNCTIONALITY] ====================== //
  
  // Star Rating System
  const initStarRating = () => {
    const ratingContainers = document.querySelectorAll('.rating-stars');
    
    ratingContainers.forEach(container => {
      const stars = container.querySelectorAll('input[type="radio"]');
      
      stars.forEach((star, index) => {
        star.addEventListener('change', () => {
          // Reset all stars
          stars.forEach(s => s.nextElementSibling.style.color = '#ddd');
          // Color selected stars
          for(let i = 0; i <= index; i++) {
            stars[i].nextElementSibling.style.color = '#D4AF37';
          }
        });
        
        star.nextElementSibling.addEventListener('mouseover', () => {
          // Temporary highlight on hover
          stars.forEach((s, i) => {
            s.nextElementSibling.style.color = i <= index ? '#D4AF37' : '#ddd';
          });
        });
        
        star.nextElementSibling.addEventListener('mouseout', () => {
          // Revert to selected state
          const checked = container.querySelector('input:checked');
          if(checked) {
            const checkedIndex = Array.from(stars).indexOf(checked);
            stars.forEach((s, i) => {
              s.nextElementSibling.style.color = i <= checkedIndex ? '#D4AF37' : '#ddd';
            });
          } else {
            stars.forEach(s => s.nextElementSibling.style.color = '#ddd');
          }
        });
      });
    });
  };

  // Form Submission Handler
// Sostituisci solo la parte del form handler con questo
const handleFormSubmit = async (form) => {
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Submission successful! Please check your email to confirm.'); // Modifica importante
      form.reset();
      // Reset stelline
      form.querySelectorAll('.rating-stars input').forEach(star => {
        star.checked = false;
      });
      form.querySelectorAll('.rating-stars label').forEach(label => {
        label.style.color = '#ddd';
      });
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.error || 'Unknown error'}`);
    }
  } catch (error) {
    alert('Network error. Please check your connection.');
  }
};

  // Initialize Forms
  const forms = document.querySelectorAll('form');
  if(forms.length > 0) {
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(form);
      });
    });

    // Initialize star rating only on forms that have it
    const ratingForms = document.querySelectorAll('.feedback-form');
    if(ratingForms.length > 0) {
      initStarRating();
    }
  }
});