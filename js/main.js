document.addEventListener("DOMContentLoaded", function() {
  // Top menu banner animation
  const topMenu = document.querySelector('.top-menu');
  const headerBanner = document.querySelector('.header-banner');
  const bannerTitle = document.querySelector('.banner-title');
  const bannerDesc = document.querySelector('.banner-desc');
  const menuLinks = document.querySelectorAll('.menu a');

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

  // Intersection Observer for articles sections animation
  const observerOptions = {
    threshold: 0.3
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Once animated, stop observing
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const sections = document.querySelectorAll('.articles-section');
  sections.forEach(section => observer.observe(section));
});
