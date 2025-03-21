document.addEventListener("DOMContentLoaded", function() {
  // Top menu banner animation: update banner content on hover over menu links
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

  // Expand and collapse banner on top-menu hover
  topMenu.addEventListener('mouseenter', () => {
    headerBanner.style.height = "33vh";
    headerBanner.style.padding = "20px 40px";
  });
  topMenu.addEventListener('mouseleave', () => {
    headerBanner.style.height = "0";
    headerBanner.style.padding = "0 40px";
  });

  // Insights: Tag filtering using select list and Load More functionality
  const filterSelect = document.getElementById('filterSelect');
  if (filterSelect) {
    filterSelect.addEventListener('change', function() {
      const selected = filterSelect.value;
      const insightPosts = document.querySelectorAll('.insight-post');
      insightPosts.forEach(post => {
        const tags = post.getAttribute('data-tags');
        post.style.display = (selected === 'all' || tags.includes(selected)) ? 'block' : 'none';
      });
    });
  }

  const loadMoreBtn = document.getElementById('loadMoreInsights');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const insightPosts = document.querySelectorAll('.insight-post');
      insightPosts.forEach(post => post.style.display = 'block');
      loadMoreBtn.style.display = 'none';
    });
  }
});
