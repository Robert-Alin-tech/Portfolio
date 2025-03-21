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

  // Insights: Tag filtering and Load More functionality
  const tagFilters = document.querySelectorAll('.tag-filter');
  const insightPosts = document.querySelectorAll('.insight-post');
  const loadMoreBtn = document.getElementById('loadMoreInsights');

  tagFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      insightPosts.forEach(post => {
        post.style.display = (tag === 'all' || post.getAttribute('data-tags').includes(tag)) ? 'block' : 'none';
      });
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      insightPosts.forEach(post => post.style.display = 'block');
      loadMoreBtn.style.display = 'none';
    });
  }
});
